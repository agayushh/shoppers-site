import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n Successfully connected to database: ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("Couldnt connect to the database");
    process.exit(1);
  }
};

export default connectToDb
