const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//@acess public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find()
    res.status(200).json({ msg: products });
});


//@acess public
const getProduct = (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully" })
};


//@acess public
const getProductReviews = (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully" })
};


//@route POST /api/products
//@access public
const createProduct= (req, res) => {
    // Grabs product attributes
    const {
        name, 
        category, 
        price, 
        description, 
        image
    } = req.body;

    // Checks for provided attr correctness
    if (!name || !category || !price || 
        !description || !image) {
            res.status(400); // Client Error: (400) Bad Request
            const err = new Error();
            next(err); // calls errorHandler middleware
        };
    
    
    res.json({ msg: "/api/products endpoint reached successfully" });
};


//@access public
const createProductReview = (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully" })
};


//@access public
const updateProduct = (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully"});
};


//@access public
const deleteProduct =  (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully"});
};


module.exports = { getProducts, getProduct, getProductReviews,
                   createProduct, createProductReview,
                   updateProduct,
                   deleteProduct };