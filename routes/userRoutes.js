const express = require("express");
const router = express.Router();
const { getUser, getUserReviews, getUserProducts,
        userLogin, userRegister, 
        updateUser, updateUserProduct, updateUserReview, 
        deleteUser, deleteUserProduct, deleteUserReview } = require("../controllers/userController");

// GET /api/users/...
router.get("/:userId", getUser);
router.get("/:userId/reviews", getUserReviews);
router.get("/:userId/products", getUserProducts);


// POST /api/users/...
router.post("/login", userLogin);
router.post("/register", userRegister);


// PUT /api/users/...
router.put("/:id", updateUser);
router.put("/:userId/products/:productId", updateUserProduct);
router.put("/:userId/reviews/:reviewId", updateUserReview);


// DELETE /api/users/...
router.delete("/:userId", deleteUser);
router.delete("/:userId/reviews/:reviewId", deleteUserReview);
router.delete("/:userId/products/:productId", deleteUserProduct);

module.exports = router;