import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Anclora API",
    endpoints: ["POST /api/contact"],
  });
}
