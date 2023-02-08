import mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/P-user";

export const connectDb =  async() => {
  try {
    mongoose.set('strictQuery', true);
    console.log(mongoUrl)
    const conn = await mongoose.connect(mongoUrl);
    console.log(conn)

    conn && console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }
};
