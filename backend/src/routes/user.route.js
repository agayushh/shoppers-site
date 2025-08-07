import express from "express";
import { registeruser } from "../controllers/user.controller.js";

const userrouter = express.Router();

userrouter.post("/", registeruser);

export { userrouter };
