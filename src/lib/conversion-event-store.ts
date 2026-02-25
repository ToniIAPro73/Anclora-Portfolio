import type { ConversionEventInput } from "@/lib/schemas/conversion-event"
import { promises as fs } from "node:fs"
import path from "node:path"

type ConversionEventRecord = ConversionEventInput & {
  id: string
  ipAddress: string
  userAgent: string
  createdAt: string
}

const DB_DIR = path.join(process.cwd(), "db")
const getEventsFile = () =>
  process.env.ANCLORA_EVENTS_FILE_PATH || path.join(DB_DIR, "conversion-events.json")
let writeQueue: Promise<void> = Promise.resolve()

const ensureStorage = async () => {
  const eventsFile = getEventsFile()
  await fs.mkdir(path.dirname(eventsFile), { recursive: true })
  try {
    await fs.access(eventsFile)
  } catch {
    await fs.writeFile(eventsFile, "[]", "utf-8")
  }
}

const readEvents = async (): Promise<ConversionEventRecord[]> => {
  const eventsFile = getEventsFile()
  await ensureStorage()
  const raw = await fs.readFile(eventsFile, "utf-8")
  try {
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? (parsed as ConversionEventRecord[]) : []
  } catch {
    return []
  }
}

export const saveConversionEvent = async (
  input: ConversionEventInput,
  ipAddress: string,
  userAgent: string
) => {
  const eventsFile = getEventsFile()
  const record: ConversionEventRecord = {
    ...input,
    id: crypto.randomUUID(),
    ipAddress,
    userAgent,
    createdAt: new Date().toISOString(),
    timestamp: input.timestamp || new Date().toISOString(),
  }

  writeQueue = writeQueue.then(async () => {
    const events = await readEvents()
    events.push(record)
    await fs.writeFile(eventsFile, JSON.stringify(events, null, 2), "utf-8")
  })

  await writeQueue
  return record
}

export const listConversionEvents = async () => readEvents()

export const resetConversionEventStore = async () => {
  writeQueue = Promise.resolve()
  const eventsFile = getEventsFile()
  try {
    await fs.unlink(eventsFile)
  } catch {
    // no-op
  }
}
