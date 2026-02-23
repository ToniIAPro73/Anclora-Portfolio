import type { ContactInput } from "@/lib/schemas/contact"
import { promises as fs } from "node:fs"
import path from "node:path"

type InquiryRecord = ContactInput & {
  id: string
  ipAddress: string
  createdAt: string
}

const DB_DIR = path.join(process.cwd(), "db")
const INQUIRIES_FILE = path.join(DB_DIR, "inquiries.json")
let writeQueue: Promise<void> = Promise.resolve()

const ensureStorage = async () => {
  await fs.mkdir(DB_DIR, { recursive: true })
  try {
    await fs.access(INQUIRIES_FILE)
  } catch {
    await fs.writeFile(INQUIRIES_FILE, "[]", "utf-8")
  }
}

const readInquiries = async (): Promise<InquiryRecord[]> => {
  await ensureStorage()
  const raw = await fs.readFile(INQUIRIES_FILE, "utf-8")
  try {
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? (parsed as InquiryRecord[]) : []
  } catch {
    return []
  }
}

export const saveInquiry = async (input: ContactInput, ipAddress: string) => {
  const record: InquiryRecord = {
    ...input,
    id: crypto.randomUUID(),
    ipAddress,
    createdAt: new Date().toISOString(),
  }

  writeQueue = writeQueue.then(async () => {
    const inquiries = await readInquiries()
    inquiries.push(record)
    await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8")
  })

  await writeQueue
  return record
}

export const listInquiries = async () => readInquiries()
