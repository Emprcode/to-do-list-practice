import express from "express";
import { getUser } from "../model/user/UserModel.js";

const router = express.Router();

// post

router.post("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "success",
  });
});

// get

router.get("/", (req, res, next) => {
  const user = getUser(req.body)
  
  res.json({
    status: "success",
    message: "success",
    user
  });
});

export default router;
