import User from "../models/user.model.js";
import bcryp from "bcryptjs";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.staatus(401);
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcryp.compare(password, user.password);
    if (!isMatch) {
      res.staatus(401);
      throw new Error("Invalid email or password");
    }

    res.json({
      message: "Login successful",
    });
  } catch (error) {
    res.json({
      message: "Login fail",
    });
    console.log(error);
  }
};
