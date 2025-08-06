import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler";

const createSignupAccessToken = async (userid) => {
  try {
    const user = await User.findById(userid);
    const accessToken = user.generateAccessToken();
    return { accessToken };
  } catch (error) {
    throw new ApiError(500, "Couldn't generate accesstoken");
  }
};

const signin = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => !field || field.trim() === "")) {
    throw new ApiError(403, "Invalid input fields");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new ApiError(401, "User already exist");
  }

  const createUser = await User.create({
    name: name,
    email: email,
    password: password,
  });
  const { accessToken } = await generateAccessToken(createUser._id);

  return res.status(200).json(
    {
      message: "User successfully created",
      user: createUser,
    },
    accessToken
  );
});

export { signin };
