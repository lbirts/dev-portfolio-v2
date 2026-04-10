import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = typeof body?.password === "string" ? body.password : "";

    const expectedPassword = process.env.PORTFOLIO_CASE_STUDY_PASSWORD;
    if (!expectedPassword) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Case study password is not configured. Set PORTFOLIO_CASE_STUDY_PASSWORD.",
        },
        { status: 500 }
      );
    }

    if (password !== expectedPassword) {
      return NextResponse.json({ ok: false, error: "Incorrect password." }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set("portfolioCaseStudyAuth", "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/professional-project-case-studies",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}

