const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to DB
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    // Mail config (use ENV variables)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "New message from TOCSI website",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Thanks for contacting TOCSI",
    });

  } catch (error) {
    console.error("Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

module.exports = router;