const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required : [true , "Please add First name"],
    },
    lastname: {
        type: String,
    },
    email : {
        type: String,
        required : [true , "Please add user email address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true,"Please provide a password" ],
    }

},
{
    timestamps: true,
})

module.exports = mongoose.model("User",userSchema);