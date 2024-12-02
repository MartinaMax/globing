import dbConnect from '@/app/lib/mongodb';
import Admin from '@/app/models/admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { adminValidation } from '@/app/lib/validation/authValidation';

export default async function handler(req, res) {
  // Connect to DB
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { error } = adminValidation(req.body);

      // Validation errors
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      // Find admin by username
      const admin = await Admin.findOne({ username: req.body.username });
      if (!admin) {
        return res.status(404).json({ error: 'Sorry. User not found' });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(req.body.password, admin.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: admin._id, username: admin.username },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      // Send token to the client
      res.status(200).json({
        error: null,
        data: { token },
      });
    } catch (err) {
      res.status(500).json({ error: 'Server error', details: err.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}