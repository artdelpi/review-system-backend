const getProducts = (req, res) => {
    res.json({ msg: "/api/products endpoint reached successfully" })
};


const getProduct = (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully" })
};


const getProductReviews = (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully" })
};


const createProduct= (req, res) => {
    res.json({ msg: "/api/products endpoint reached successfully" });
};


const createProductReview = (req, res) => {
    res.json({ msg: "/api/products/:id/reviews endpoint reached successfully" })
};


const updateProduct = (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully"});
};


const deleteProduct =  (req, res) => {
    res.json({ msg: "/api/products/:id endpoint reached successfully"});
};


module.exports = { getProducts, getProduct, getProductReviews,
                   createProduct, createProductReview,
                   updateProduct,
                   deleteProduct };