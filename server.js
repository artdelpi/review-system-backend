// Web framework; Application obj as "app" (server instance)
const express = require("express");

// Reads the .env file and updates process.env
const dotenv = require("dotenv").config();

// Server instance 
const app = express(); 
const port = process.env.PORT || 5000;


// Login & Register
app.post("/api/users/login", (req, res) => {
    res.json({msg: "api/users/login endpoint reached successfully"});
});
app.post("/api/users/register", (req, res) => {
    res.json({msg: "api/users/register endpoint reached successfully"});
});


// GET + users & reviews endpoints + controller
app.get("/api/users/:id", (req, res) => {
    res.json({msg: "api/users/:id endpoint reached successfully"});
});
app.get("/api/users/:id/reviews", (req, res) => {
    res.json({msg: "api/users/:id/reviews endpoint reached successfully"});
});
app.get("/api/users/:id/products", (req, res) => {
    res.json({msg: "api/users/:id/products endpoint reached successfully"});
});


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
    res.json({msg: "api/products/:id/reviews endpoint reached successfully"});
});


// POST + products & reviews endpoints + controller
app.post("/api/products", (req, res) => {
    res.json({msg: "/api/products endpoint reached successfully"});
});
app.post("/api/products/:id/reviews", (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully"});
});


// PUT + users & products & reviews endpoints + controller
app.put("/api/users/:id", (req, res) => {
    res.json({ msg: "api/users/:id endpoint reached successfully"});
})
app.put("/api/users/:id/products/:id", (req, res) => {
    res.json({ msg: "api/users/:id/products/:id endpoint reached successfully"});
})
app.put("/api/users/:id/reviews/:id", (req, res) => {
    res.json({ msg: "api/users/:id/reviews/:id endpoint reached successfully"});
})


// DELETE + users & products & reviews endpoints + controller
app.delete("/api/users/:id", (req, res) => {
    res.json({ msg: "api/users/:id endpoint reached successfully"});
})
app.delete("/api/users/:id/reviews/:id", (req, res) => {
    res.json({ msg: "api/users/:id/reviews/:id endpoint reached successfully"});
})
app.delete("/api/users/:id/products/:id", (req, res) => {
    res.json({ msg: "/api/users/:id/products/:id endpoint reached successfully"});
})


// Runs server on port ${port}
app.listen(port, () => {
    console.log(`Web Server is running on port ${port}`);
});