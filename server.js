// Web framework; Application obj as "app" (server instance)
const express = require("express");

// Reads the .env file and updates process.env
const dotenv = require("dotenv").config();

// Server instance 
const app = express(); 
const port = process.env.PORT || 5000;


// GET + users & reviews endpoints + controller
app.use("/api/users", require("./routes/userRoutes"));

// GET + products & reviews endpoints + controller
app.get("/api/products", (req, res) => {
    res.json({msg: "api/products endpoint reached successfully"});
});
app.get("/api/products/reviews", (req, res) => {
    res.json({msg: "api/product/reviews endpoint reached successfully"});
});
app.get("/api/products/:id", (req, res) => {
    res.json({msg: "api/products/:id endpoint reached successfully"});
});
app.get("/api/products/:id/reviews", (req, res) => {
    res.json({msg: "/api/products/:id/reviews endpoint reached successfully"});
});


// POST + products & reviews endpoints + controller
app.post("/api/products", (req, res) => {
    res.json({msg: "/api/products endpoint reached successfully"});
});
app.post("/api/products/:id/reviews", (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully"});
});

// Runs server on port ${port}
app.listen(port, () => {
    console.log(`Web Server is running on port ${port}`);
});