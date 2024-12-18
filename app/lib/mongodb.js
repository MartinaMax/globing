import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Creating the connection
const dbConnect = async () => {

    try {
        mongoose.connect(MONGODB_URI);
        console.log("Connected");
    } catch (error) {
        console.log(error);
    } 
}

export default dbConnect;