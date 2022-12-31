import mongoose from "mongoose";

export const connectDb = () => {
  const apiEp = "mongodb://localhost:27017/to-do-list-p";

  const conn = new mongoose.connect(apiEp);

  conn
    ? console.log("mongo Connected")
    : console.log("unable to connect database");
};
