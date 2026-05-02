const express = require("express");
const router = express.Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await resend.emails.send({
      from: "TOCSI <onboarding@resend.dev>", // DO NOT CHANGE NOW
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: "New message from TOCSI website",
      html: `
        <h2>New Contact Message from TOCSI Website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.json({
      success: true,
      message: "Thanks for contacting TOCSI",
    });

  } catch (error) {
    console.error("Contact email error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

module.exports = router;