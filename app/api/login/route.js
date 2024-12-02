import dbConnect from '@/lib/mongodb';
import Admin from '@/models/admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { adminValidation } from '@/lib/validation/authValidation';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export async function POST(req) {
  try {
    // Connection to DB
    await dbConnect();

    const body = await req.json();

    // Joi validate the body
    const { error } = adminValidation(body);
    if (error) {
      return new Response(JSON.stringify({ error: error.details[0].message }), { status: 400 });
    }

    // Find the admin by username
    const admin = await Admin.findOne({ username: body.username });
    if (!admin) {
      return new Response(JSON.stringify({ error: 'Sorry. User not found' }), { status: 404 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(body.password, admin.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 400 });
    }

    // Generate a token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return new Response(JSON.stringify({ error: null, data: { token } }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Server error', details: err.message }),
      { status: 500 }
    );
  }
}