import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `mongoDB connected successfully to ${mongoose.connection.name}`
    );
  } catch (error) {
    console.log("mongoDB connected failed", error);
    process.exit(1);
  }
};

export default connectDB;
