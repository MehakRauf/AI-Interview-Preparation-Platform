const { loginController, signupController } = require("../controllers/authController");
const express = require("express");

const router = express.Router();

router.post('/login',loginController);
router.post('/signup', signupController);