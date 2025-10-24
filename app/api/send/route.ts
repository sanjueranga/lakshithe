import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Your email address (the one you use for your Resend account)
const MY_EMAIL = "sanjueranga16@gmail.com";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Log to server to confirm data is received
    console.log("Received contact form submission:", { name, email });

    // This is the fix. We build an HTML string instead of using React.
    const htmlBody = `
      <div>
        <h1>New Portfolio Message</h1>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, "<br>")}</p> 
      </div>
    `;

    const data = await resend.emails.send({
      from: "help@xanvia.tech",
      to: MY_EMAIL, // <-- Fix 1: Send the email to YOURSELF
      subject: `New Portfolio Message from ${name}`,
      // Fix 3: Use the 'html' property instead of 'react'
      html: htmlBody,
    });

    console.log("Email sent successfully:", data);
    return Response.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    // Send a proper error response back to the client
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
