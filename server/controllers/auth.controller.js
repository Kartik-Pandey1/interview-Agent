import genToken from "../config/token.js"
import User from "../models/user.model.js"


export const googleAuth = async (req, res) => {
  try {
    console.log("Body:", req.body);

    const { name, email } = req.body;

    console.log("Finding user...");
    let user = await User.findOne({ email });

    if (!user) {
      console.log("Creating user...");
      user = await User.create({
        name,
        email,
      });
    }

    console.log("Generating token...");
    const token = await genToken(user._id);

    console.log("Setting cookie...");
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    console.log("Login Success");

    return res.status(200).json(user);

  } catch (error) {
    console.error("Google Auth Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

