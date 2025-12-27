import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      whatsapp,
      loadType,
      bodyType,
      fromLocation,
      toLocation,
      loadWeight,
      message,
    } = await req.json();

    if (
      !name ||
      !email ||
      !phone ||
      !whatsapp ||
      !loadType ||
      !bodyType ||
      !fromLocation ||
      !toLocation ||
      !loadWeight ||
      !message
    ) {
      return NextResponse.json(
        { success: false, error: "Please fill required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SK Transport Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: "🚛 New Transport Enquiry",
      html: `
        <h2>New Transport Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>

        <hr/>

        <p><strong>Load Type:</strong> ${loadType}</p>
        <p><strong>Body Type:</strong> ${bodyType}</p>
        <p><strong>Route:</strong> ${fromLocation} → ${toLocation}</p>
        <p><strong>Weight:</strong> ${loadWeight} KG</p>

        <hr/>

        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("❌ EMAIL ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
