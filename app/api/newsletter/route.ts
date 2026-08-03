import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
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
  } catch (error) {
    console.error("Newsletter POST failed", error);

    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
