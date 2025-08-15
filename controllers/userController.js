const getUser = (req, res) => {
    res.json({msg: "api/users/:userId endpoint reached successfully"});
};


const getUserReviews = (req, res) => {
    res.json({msg: "api/users/:userId/reviews endpoint reached successfully"});
};


const getUserProducts = (req, res) => {
    res.json({msg: "api/users/:userId/products endpoint reached successfully"});
};


const userLogin = (req, res) => {
    res.json({msg: "api/users/login endpoint reached successfully"});
};


const userRegister = (req, res) => {
    res.json({msg: "api/users/register endpoint reached successfully"});
};


const updateUser = (req, res) => {
    res.json({ msg: "/api/users/:userId endpoint reached successfully"});
};


const updateUserProduct = (req, res) => {
    res.json({ msg: "/api/users/:userId/products/:productId endpoint reached successfully"});
};


const updateUserReview = (req, res) => {
    res.json({ msg: "/api/users/:userId/reviews/:reviewId endpoint reached successfully"});
};


const deleteUser = (req, res) => {
    res.json({ msg: "/api/users/:userId endpoint reached successfully"});
};


const deleteUserProduct = (req, res) => {
    res.json({ msg: "/api/users/:userId/products/:productId endpoint reached successfully"});
};


const deleteUserReview = (req, res) => {
    res.json({ msg: "/api/users/:userId/reviews/:reviewId endpoint reached successfully"});
};


module.exports = { getUser, getUserReviews, getUserProducts,
                   userLogin, userRegister, 
                   updateUser, updateUserProduct, updateUserReview, 
                   deleteUser, deleteUserProduct, deleteUserReview };