import express from "express";

const userrouter = express.Router();

userrouter.route("/", signin);

export { userrouter };
