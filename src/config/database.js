import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const spawn = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}${process.env.DATABASE_NAME}`,
    );
    console.log(`MONGODB CONNECTED`);
  } catch (error) {
    console.log("error", error);
  }
};
export default spawn;
