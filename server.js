const express = require("express");
const connectDb = require("./config/dbConnections")
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// Connection with mongodb before creating my express app
connectDb();

const app = express();
const port = process.env.PORT || 5000;


// Whenever I need to use a middleware , we must use app.use()
// Whenever we use /api/contacts route, it use the contactRoutes request and response
// app.use is for middleware

app.use(express.json()) // Provides a parser to read JSON data in the body of requests
app.use("/api/users" , require("./routes/userRoutes")) 

app.use(errorHandler)


app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})