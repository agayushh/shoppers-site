import express from "express";
import { registeruser, loginuser } from "../controllers/user.controller.js";

const userrouter = express.Router();

userrouter.post("/register", registeruser);
userrouter.post("/login", loginuser);

export { userrouter };
