const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//@route GET /api/products
//@access public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find()
    res.status(200).json({ msg: products });
});

 
//@route GET /api/products/:id
//@access public
const getProduct = (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully" })
};


//@route GET /api/products/:id/reviews
//@access public
const getProductReviews = (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully" })
};


//@route POST /api/products
//@access public
const createProduct = asyncHandler(async (req, res) => {
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
    
    // Creates and stores a new document in MongoDB
    const product = await Product.create({
        name,
        category,
        price,
        description,
        image
    });
    
    res.status(201).json({ product });
});

//@route POST /api/products/:id/reviews
//@access public
const createProductReview = (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully" })
};


//@route PUT /api/products/:id
//@access public
const updateProduct = (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully"});
};


//@route DELETE /api/products/:id
//@access public
const deleteProduct =  (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully"});
};

module.exports = { getProducts, getProduct, getProductReviews,
                   createProduct, createProductReview,
                   updateProduct,
                   deleteProduct };