const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String, // image URL
        required: false
    }
}, {
    timestamps: true
    }
);

module.exports = mongoose.model(
    "Product", // 'Product' maps to the 'products' collection 
    productSchema
);