const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register" , registerUser)

router.post("/login" , loginUser)

//validateToken is a middleware use to check  if the acess-token is valid or not 
router.get("/current" ,validateToken, currentUser)

module.exports = router