const asyncHandler = require("express-async-handler");
const User = require("../mongo/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config;
const generateToken = (id) => {
  // return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30s" });
  return jwt.sign({ id }, "akash", { expiresIn: "1d" });
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  
  const {username,email,password} = req.body;
  console.log(username)
  console.log(email)
  console.log(password)
  // Validation
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }
  if (password.length < 4) {
    res.status(400);
    throw new Error("Password must be up to 4 characters");
  }

  // Check if user email already exists
  const userExists = await User.findOne({ username,email });

  if (userExists) {
    res.status(400);
    throw new Error("Email has already been registered");
  }
      //encrypt password
      const encryptedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = await new User({
    username,
    email,
    password:encryptedPassword,
    // registrationProof: fileData
  });
user.save()
  //   Generate Token
console.log(user);
  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, email} = user;
    res.status(201).json({
      _id,
      name,
      email,
      token,
    });
    console.log("sending")
    console.log(user);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  console.log("hello");
  const { email, password } = req.body;
 
  // Validate Request
  if ( !email || !password) {
    res.status(400);
    throw new Error("Please add name and password");
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User not found, please signup");
  }

  
  // User exists, check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);
  //   Generate Token
  const token = generateToken(user._id);

  console.log(token)
  console.log(user)
  console.log(passwordIsCorrect)
  if(passwordIsCorrect){
   // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });
}
  if (user && passwordIsCorrect) {
    const { _id, name, email, profilepic}= user;
    res.status(200).json({
      _id,
      name,
      email,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// Logout User
const logout = asyncHandler(async (req, res) => {

  console.log("in userController logout")
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, please login");
    }
    const verified = jwt.verify(token, 'dhruv');
    console.log(verified)
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "Successfully Logged Out" });
});

module.exports={
  registerUser,
  loginUser,
  logout,
}
