import type { ContactInput } from "@/lib/schemas/contact"
import { promises as fs } from "node:fs"
import path from "node:path"

type InquiryRecord = ContactInput & {
  id: string
  ipAddress: string
  createdAt: string
}

const DB_DIR = path.join(process.cwd(), "db")
const getInquiriesFile = () => process.env.ANCLORA_INQUIRIES_FILE_PATH || path.join(DB_DIR, "inquiries.json")
let writeQueue: Promise<void> = Promise.resolve()

const ensureStorage = async () => {
  const inquiriesFile = getInquiriesFile()
  await fs.mkdir(path.dirname(inquiriesFile), { recursive: true })
  try {
    await fs.access(inquiriesFile)
  } catch {
    await fs.writeFile(inquiriesFile, "[]", "utf-8")
  }
}

const readInquiries = async (): Promise<InquiryRecord[]> => {
  const inquiriesFile = getInquiriesFile()
  await ensureStorage()
  const raw = await fs.readFile(inquiriesFile, "utf-8")
  try {
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? (parsed as InquiryRecord[]) : []
  } catch {
    return []
  }
}

export const saveInquiry = async (input: ContactInput, ipAddress: string) => {
  const inquiriesFile = getInquiriesFile()
  const record: InquiryRecord = {
    ...input,
    id: crypto.randomUUID(),
    ipAddress,
    createdAt: new Date().toISOString(),
  }

  writeQueue = writeQueue.then(async () => {
    const inquiries = await readInquiries()
    inquiries.push(record)
    await fs.writeFile(inquiriesFile, JSON.stringify(inquiries, null, 2), "utf-8")
  })

  await writeQueue
  return record
}

export const listInquiries = async () => readInquiries()

export const resetInquiryStore = async () => {
  writeQueue = Promise.resolve()
  const inquiriesFile = getInquiriesFile()
  try {
    await fs.unlink(inquiriesFile)
  } catch {
    // no-op
  }
}
