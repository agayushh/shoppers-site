import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler";

const createSignupAccessToken = async (userid) => {
  try {
    const user = await User.findById(userid);
    const accessToken = user.generateAccessToken();
    return { accessToken };
  } catch (error) {
    // throw new ApiError(500, "Couldn't generate accesstoken");
    return error
      .status(500)
      .json({ message: "Server error ne accesstoken nhi banaya" });
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
    const { accessToken } = await createSignupAccessToken(createUser._id);

    const newUser = createUser.toObject();
    delete newUser.password;

    return res.status(200).json(
      {
        message: "User successfully created",
        user: newUser,
      },
      accessToken
    );
  } catch (error) {
    return res.status(409).json({ message: "User already exist kindly login" });
  }
});

export { registeruser };
