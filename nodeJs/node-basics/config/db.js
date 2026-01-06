import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected")
    } catch (error) {
        console.log("DB connection failed", error);
        process.exit(1);
    }
}

export default connectDB;

//sunkarabharathkumar118_db_user
//bharath118
