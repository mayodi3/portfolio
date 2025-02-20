"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mayodisaac3@gmail.com", // Replace with your Gmail address
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD!, // Replace with your Gmail password or app password
    },
  });

  // Email options
  const mailOptions = {
    from: "mayodisaac3@gmail.com", // Replace with your Gmail address
    to: "mayodisaac3@gmail.com", // Replace with the recipient's email address
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email" };
  }
}
