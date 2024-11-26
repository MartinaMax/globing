import mongoose from 'mongoose';

const referenceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            max: 255
        },

        descr: {
            type: String,
            required: true,
            max: 500
        }
    }
);

export default mongoose.models.Reference || mongoose.model('Reference', referenceSchema)