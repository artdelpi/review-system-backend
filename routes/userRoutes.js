const express = require("express");
const router = express.Router();


// GET /api/users/...
router.get("/:userId", (req, res) => {
    res.json({msg: "api/users/:userId endpoint reached successfully"});
});
router.get("/:userId/reviews", (req, res) => {
    res.json({msg: "api/users/:userId/reviews endpoint reached successfully"});
});
router.get("/:userId/products", (req, res) => {
    res.json({msg: "api/users/:userId/products endpoint reached successfully"});
});


// POST /api/users/...
router.post("/login", (req, res) => {
    res.json({msg: "api/users/login endpoint reached successfully"});
});
router.post("/register", (req, res) => {
    res.json({msg: "api/users/register endpoint reached successfully"});
});


// PUT /api/users/...
router.put("/:id", (req, res) => {
    res.json({ msg: "/api/users/:userId endpoint reached successfully"});
});
router.put("/:userId/products/:productId", (req, res) => {
    res.json({ msg: "/api/users/:userId/products/:productId endpoint reached successfully"});
});
router.put("/:userId/reviews/:reviewId", (req, res) => {
    res.json({ msg: "/api/users/:userId/reviews/:reviewId endpoint reached successfully"});
});


// DELETE /api/users/...
router.delete("/:userId", (req, res) => {
    res.json({ msg: "/api/users/:userId endpoint reached successfully"});
});
router.delete("/:userId/reviews/:reviewId", (req, res) => {
    res.json({ msg: "/api/users/:userId/reviews/:reviewId endpoint reached successfully"});
});
router.delete("/:userId/products/:productId", (req, res) => {
    res.json({ msg: "/api/users/:userId/products/:productId endpoint reached successfully"});
});

module.exports = router;