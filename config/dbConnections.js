// Create a cluster in mongodb dashboard and get connection string

const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        // NOTE CONNECTION_STRING MUST INCLUDE THE DATABASE NAME IN IT
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(
            "Database connection: ",
            connect.connection.host,
            connect.connection.name
        );
    }
    // If we have error
    catch(err){
        console.log(err); // Log the error
        process.exit(1); // exit the connection process
    }

}

module.exports = connectDb