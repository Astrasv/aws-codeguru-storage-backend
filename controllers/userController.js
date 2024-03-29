const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {

    // Check all fields are filled
    const {firstname,lastname,email, password} = req.body;
    if (!firstname || !email || !password){
        res.status(400);
        throw new Error('All fields are mandatory');
    }
    
    //Check if the user already exists
    const userAvailable = await User.findOne({ email });
    if(userAvailable) {
        res.status(400)
        throw new Error('User already registered');
    }

    // bcrypt for hashing password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is number of salt rounds for hashing
    console.log(hashedPassword)    
    
    // If use dont existing  then create it 
    const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
    })

    console.log(`User created ${user}`)

    // Check for correct creation of user
    if(user){
        res.status(201).json({_id: user.id , email: user.email});
    } else{
        res.status(400);
        throw new Error("User data is not valid")
    }
    
    res.json({message: "Register the user"});
})

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password }= req.body
    if (!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const user = await User.findOne({email})
    // Compare password with hashed password
    if(user && (await bcrypt.compare(password, user.password))){

        // Calling the jwt payload inside sign
        // Secret access token is in .env. Must be unique
        const accessToken = jwt.sign({
            user: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                id: user.id,
            }
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'1m'}, // Expiration time of the accesstoken must be 1m. Using higher time for dev purpose
        );
        res.status(200).json({accessToken})
    }
    else {
        res.status(401);
        throw new Error("Email or Password is not valid")
    }
})

//@desc View current user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) => {
    // We log req.user because we did req.user = decoded.user in our middleware
    res.json(req.user);
})


module.exports = { registerUser ,loginUser ,currentUser }
