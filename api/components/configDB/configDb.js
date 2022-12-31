import mongoose from "mongoose";

export const connectDb = () => {
  try {
    const mongoUrl = "mongodb://localhost:27017/to-do-list-p";

    const conn = mongoose.connect(mongoUrl);

    conn
      ? console.log("mongo Connected")
      : console.log("unable to connect database");
  } catch (error) {
    console.log(error);
  }
};
