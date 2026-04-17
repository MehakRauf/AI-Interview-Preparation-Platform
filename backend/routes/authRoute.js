const { loginController, signupController, getUserProfile } = require("../controllers/authController");
const express = require("express");
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

router.post('/login',loginController);
router.post('/signup', signupController);
router.get("/profile" , protect, getUserProfile);

module.exports = router;

