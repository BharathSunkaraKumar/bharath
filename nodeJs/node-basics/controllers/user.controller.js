import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find();
    res.json({users});
});

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}