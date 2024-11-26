import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 2,
            max: 200
        },
        password: {
            type: String,
            reguired: true,
            min: 8,
            max: 255
        }
    }
);

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema)