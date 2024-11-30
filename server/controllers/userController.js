import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
import { response } from "express";

// Register user
const register = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const avatar = {
      public_id: "default_avatar",
      url: "https://example.com/default-avatar.png",
    };

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await User.create({
      name,
      username,
      avatar,
      password: hashPassword,
    });

    return res.status(201).json({
      success: true,
      user,
      message: "User successfully created",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during registration",
    });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exist. Please register.",
      });
    }

    // Validate the password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { username: user.username, userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set the cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      token,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during login",
    });
  }
};

// fetching the data

const getUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.find({ username });
    return res.status(200).json({
      success: true,
      user,
      message: "details successfully fetched",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,

      message: "error fetching the details",
    });
  }
};

const logoutUser = async(req,res)=>{

    try{
        res.cookie("token","",{
            httpOnly:true,
            sameSite:"strict"
        });
        return res.status(200).json({
            success:"true",
            message:"Logout Successfully"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Some error occured during logout"
        })
    }
}


export { login, register, getUser,logoutUser };
