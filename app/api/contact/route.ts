import { NextResponse } from "next/server"

export async function POST(request: Request) {
  let body: any
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload in request body" },
      { status: 400 }
    )
  }

  try {
    const { name, email, subject, message } = body || {}

    // Validate fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      )
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      )
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Message must be at least 5 characters long" },
        { status: 400 }
      )
    }

    const recipientEmail =
      process.env.CONTACT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "natihaile6568@gmail.com"

    const cleanSubject = subject?.trim() || `Portfolio Inquiry from ${name.trim()}`
    const cleanMessage = message.trim()
    const cleanEmail = email.trim()
    const cleanName = name.trim()

    // Log the contact inquiry for server observability
    console.log("------------------------------------------")
    console.log("New Portfolio Contact Submission:")
    console.log(`From: ${cleanName} <${cleanEmail}>`)
    console.log(`Subject: ${cleanSubject}`)
    console.log(`To: ${recipientEmail}`)
    console.log(`Message:\n${cleanMessage}`)
    console.log(`Timestamp: ${new Date().toISOString()}`)
    console.log("------------------------------------------")

    // If an external email provider like Resend is configured, send directly:
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: cleanEmail,
            subject: cleanSubject,
            text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
          }),
        })

        if (!resendRes.ok) {
          const resendErr = await resendRes.text()
          console.warn("Resend API responded with error:", resendErr)
        }
      } catch (externalErr) {
        console.warn("Failed to dispatch via external mailer:", externalErr)
      }
    }

    // Pre-calculate mailto URL so the client can trigger native mail as fallback
    const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(
      cleanSubject
    )}&body=${encodeURIComponent(
      `Hello Natnael,\n\nName: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`
    )}`

    return NextResponse.json({
      success: true,
      message: `Thank you, ${cleanName}! Your message has been received. Natnael will get back to you shortly at ${cleanEmail}.`,
      recipient: recipientEmail,
      mailtoUrl,
    })
  } catch (err: unknown) {
    console.error("Contact API route error:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message. Please try again or email directly." },
      { status: 500 }
    )
  }
}
