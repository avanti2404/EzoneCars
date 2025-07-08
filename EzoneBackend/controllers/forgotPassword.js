const AdminSchema = require("../schema/adminSchema")
const crypto = require("crypto");
const nodemailer = require("nodemailer"); // or your preferred mailer

require('dotenv').config()
const frontendUrl = process.env.VITE_FRONTEND_URL;

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const admin = await AdminSchema.findOne({ email });

  if (!admin) return res.status(404).json({ message: "Admin not found" });

  const token = crypto.randomBytes(32).toString("hex");
  const expiry = Date.now() + 3600000; // 1 hour

  admin.resetToken = token;
  admin.resetTokenExpiry = expiry;
  await admin.save();

  // Example email transport using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const resetLink = `${frontendUrl}/reset-password/${token}`;

  await transporter.sendMail({
    to: email,
    subject: "Reset Your Password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
  });

  res.json({ message: "Password reset email sent" });
};
