const express = require("express");
const router = express.Router();


// GET /api/products/...
router.get("/", (req, res) => {
    res.json({msg: "api/products endpoint reached successfully"});
});
router.get("/reviews", (req, res) => {
    res.json({msg: "api/product/reviews endpoint reached successfully"});
});
router.get("/:id", (req, res) => {
    res.json({msg: "api/products/:id endpoint reached successfully"});
});
router.get("/:id/reviews", (req, res) => {
    res.json({msg: "/api/products/:id/reviews endpoint reached successfully"});
});


// POST /api/products/...
router.post("/", (req, res) => {
    res.json({msg: "/api/products endpoint reached successfully"});
});
router.post("/:id/reviews", (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully"});
});

module.exports = router;