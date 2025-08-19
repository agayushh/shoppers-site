import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler";

const createSignupAccessAndRefreshToken = async (userid) => {
  try {
    const user = await User.findById(userid);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    return { accessToken, refreshToken };
  } catch (error) {
    // throw new ApiError(500, "Couldn't generate accesstoken");
    return error.status(500).json({
      message: "Server error ne access token and refresh token nhi banaya",
    });
  }
};

const registeruser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => !field || field.trim() === "")) {
    return res.status(403).json({ message: "All fields are required" });
  }

  try {
    const createUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    const { accessToken, refreshToken } =
      await createSignupAccessAndRefreshToken(createUser._id);

    const newUser = createUser.toObject();
    delete newUser.password;

    return res.status(200).json({
      message: "User successfully created",
      user: newUser,
    });
  } catch (error) {
    return res.status(409).json({ message: "User already exist kindly login" });
  }
});

const loginuser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(402).json({ message: "email and password is required" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found kindly register" });
  }

  const checkPasswordValidity = await user.isPasswordValid(password);
  if (!checkPasswordValidity) {
    return res.status(404).json({ message: "Invalid credentials" });
  }
  const { accessToken, refreshToken } = await createSignupAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
      message: "User logged in successfully ",
      user: loggedInUser,
    });
});

export { registeruser, loginuser };
