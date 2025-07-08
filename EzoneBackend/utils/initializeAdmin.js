const bcrypt = require('bcrypt');
const AdminSchema = require('../schema/adminSchema');

const initializeAdmin = async () => {
  try {
    const defaultEmail = process.env.ADMIN_EMAIL;
    const plainPassword = process.env.ADMIN_PASSWORD;

    // Use case-insensitive search to avoid mismatch
    const existingAdmin = await AdminSchema.findOne({ email: new RegExp(`^${defaultEmail}$`, 'i') });

    if (existingAdmin) {
      console.log('Admin already exists, skipping creation.');
      return;
    }

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const newAdmin = new AdminSchema({
      email: defaultEmail,
      password: hashedPassword
    });

    await newAdmin.save();
    console.log('Default admin created.');
  } catch (error) {
    console.error('Error initializing admin:', error);
  }
};

module.exports = initializeAdmin;