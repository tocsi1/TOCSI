const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("New contact form submission received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  try {
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tocsi.in@gmail.com",
        pass: "dtzh gauh yjll fesv"
      }
    });

    const mailOptions = {
      from: "tocsi.in@gmail.com",
      replyTo: email,
      to: "tocsi.in@gmail.com",
      subject: "New message from TOCSI website",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    console.log("Message ID:", info.messageId);

    res.json({
      success: true,
      message: "Thanks for contacting TOCSI"
    });
  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
});

module.exports = router;