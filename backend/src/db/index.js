import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect();
  } catch (error) {
    console.log("Couldnt connect");
  }
};
