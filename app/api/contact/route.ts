import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_RECIEVER = process.env.EMAIL_RECIEVER;

if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_RECIEVER) {
  throw new Error(
    "Missing required email environment variables: EMAIL_USER, EMAIL_PASS, EMAIL_RECIEVER"
  );
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_RECIEVER,
      replyTo: `"${name}" <${email}>`,
      subject: `New contact form message from ${name}`,
      text: `${message}\n\nFrom: ${name} (${email})`,
      html: `<p>${message}</p><p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>`,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
