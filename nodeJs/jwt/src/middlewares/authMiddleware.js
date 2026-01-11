import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }
  // console.log("authHeader", authHeader);
  const token = authHeader.split(" ")[1];
  // console.log("token", token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.id;
    console.log(req.id);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
