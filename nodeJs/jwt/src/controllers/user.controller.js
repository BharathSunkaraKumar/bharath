import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return res.status(400).json("email is already exist");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json("Server not working");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findEmail = await User.findOne({ email });
    if (!findEmail || !(await bcrypt.compare(password, findEmail.password))) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign({ id: findEmail._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ success: "Login successful", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json("Server not working");
  }
};

const allUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(201).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json("Server not working");
  }
};

export { createUser, login, allUsers };
