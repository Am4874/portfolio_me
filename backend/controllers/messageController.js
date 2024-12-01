const Message = require("../models/Message");
const nodemailer = require("nodemailer");

// Create a new message and send email
exports.createMessage = async (req, res) => {
  console.log("createMessage", req.body);
  
  try {
    // Create message in database
    const message = await Message.create(req.body);

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER_RECIPIENT, // Your personal email
      subject: "New Portfolio Message",
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${message.name}</p>
        <p><strong>Email:</strong> ${message.email}</p>
        <p><strong>Message:</strong> ${message.message}</p>
        <p>Received on: ${new Date(message.createdAt).toLocaleString()}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      data: message,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
