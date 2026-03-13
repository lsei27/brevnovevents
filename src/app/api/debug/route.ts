import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    EMAIL_MODE: process.env.EMAIL_MODE ?? "NOT SET",
    WEBHOOK_URL_SET: !!process.env.WEBHOOK_URL,
    WEBHOOK_URL_PREFIX: process.env.WEBHOOK_URL?.substring(0, 30) ?? "NOT SET",
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV ?? "NOT SET",
  });
}
