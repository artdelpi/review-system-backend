const express = require("express");
const router = express.Router();
const { getProducts, getProduct, getProductReviews,
        createProduct, createProductReview,
        updateProduct,
        deleteProduct } = require("../controllers/productController"); 


// GET /api/products/...
router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/:id/reviews", getProductReviews);


// POST /api/products/...
router.post("/", createProduct);
router.post("/:id/reviews", createProductReview);


// PUT /api/products/...
router.put("/:id", updateProduct);


// DELETE /api/products/...
router.delete("/:id", deleteProduct);

module.exports = router;