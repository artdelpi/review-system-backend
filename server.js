// Web framework; Application obj as "app" (server instance)
const express = require("express");

// 
const connectDb = require("./config/dbConnection");

// Reads the .env file and updates process.env
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

connectDb();

// Server instance 
const app = express(); 
const port = process.env.PORT || 5000;

// Parses received JSONs
app.use(express.json());
// (any) HTTP requests involving users
app.use("/api/users", require("./routes/userRoutes"));
// (any) HTTP requests involving products
app.use("/api/products", require("./routes/productRoutes"));

app.use(errorHandler);

// Runs server on port ${port}
app.listen(port, () => {
    console.log(`Web Server is running on port ${port}`);
});