import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      //   required: true,
    },
    lname: {
      type: String,
      //   required: true,
    },
    email: {
      type: String,
      unique: true,

      //   required: true,
    },
    password: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", UserSchema);
