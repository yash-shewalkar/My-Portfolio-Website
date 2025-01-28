import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const attachment = formData.get("attachment") as File | null;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // SMTP Server
      port: 465, // Secure SMTP port
      auth: {
        user: process.env.SMTP_EMAIL, // Email from environment
        pass: process.env.SMTP_PASS,  // Password from environment
      },
    });

    // Define email options
    const mailOptions: any = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Attach file if provided
    if (attachment) {
      const arrayBuffer = await attachment.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      mailOptions.attachments = [
        {
          filename: attachment.name,
          content: buffer,
          contentType: attachment.type,
        },
      ];
    }

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
