const AdminSchema = require("../schema/adminSchema");
const bcrypt = require("bcrypt");

exports.resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
  
    const admin = await AdminSchema.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });
  
    if (!admin) return res.status(400).json({ message: "Token is invalid or expired" });
  
    const hashedPassword = await bcrypt.hash(password, 10);
    admin.password = hashedPassword;
    admin.resetToken = undefined;
    admin.resetTokenExpiry = undefined;
  
    await admin.save();
    res.json({ message: "Password has been reset successfully" });
  };
  