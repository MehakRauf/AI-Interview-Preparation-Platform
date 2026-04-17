const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const tokenGenerator = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.status(500).json({ message: "Invalid email or password....", alert: false });
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            res.status(500).json({ message: "Incorrect password", alert: false });
        }

        res.status(201).json({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: tokenGenerator(user._id)
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message, alert: false });
    }
}

const signupController = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send({ message: "Email already exists", alert: false });
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                confirmPassword: hashedPassword
            });

            await user.save();

            res.status(201).json({
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                token: tokenGenerator(user._id),
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message, alert: false });
    }
}

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password -confirmPassword");
        if (!user) {
            res.status(404).json({ message: "User not found", alert: false });
        }
        res.send(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message, alert: false });
    }
}

module.exports = { loginController, signupController, getUserProfile };