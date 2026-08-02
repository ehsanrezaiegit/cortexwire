import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { email?: unknown };

  try {
    body = (await request.json()) as { email?: unknown };
  } catch {
    return NextResponse.json({ ok: false, message: "Valid email required." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, message: "Valid email required." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Subscription captured by the CortexWire stub endpoint.",
  });
}
