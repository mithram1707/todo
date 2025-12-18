import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            family: 4
        });
        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.log("Atlas connection failed, trying local MongoDB...");
        try {
            await mongoose.connect("mongodb://127.0.0.1:27017/sece_todo");
            console.log("Local MongoDB Connected Successfully");
        } catch (localErr) {
            console.error("All MongoDB connections failed. Server running without database.");
        }
    }
}
export default connectDb