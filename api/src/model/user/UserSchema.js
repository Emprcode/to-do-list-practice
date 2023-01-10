import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required,
    },
    lName: {
      type: String,
      required,
    },
    email: {
      type: String,
      required,
    },
    password: {
      type: String,
      required,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
