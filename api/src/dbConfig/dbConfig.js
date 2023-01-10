import mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/P-user";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);

    conn && console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }
};
