import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Anclora API",
    endpoints: ["POST /api/contact", "POST /api/analytics/events", "GET /api/analytics/events"],
  });
}
