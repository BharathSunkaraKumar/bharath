import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    console.log("hi from singup page");
    const { email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("hash password", hashPassword);
    const user = await User.create({ email, password: hashPassword });

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
