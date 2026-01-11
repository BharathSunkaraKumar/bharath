import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    unique: true,
    reuired: true,
  },
  password: {
    type: String,
    reuired: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
