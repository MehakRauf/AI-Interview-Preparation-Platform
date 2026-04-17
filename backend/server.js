require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors({
    origin: "*",
    methods: ["PUT", "POST", "DELETE", "GET"],
    allowedHeaders: ["authorization", "Content-Type"]
}));

connectDB();

//middleware
app.use(express.json());

//routes
// app.use("/api/auth", authRoutes);
// app.use("/api/questions", questionRoutes);
// app.use("/api/session", sessionRoutes);

// app.use("/api/ai/generate-question", generateQuestion);
// app.use("/api/ai/generate-explanation", generateExplanation);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => { console.log("App is listening!"); });