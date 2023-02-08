import express from "express";
import { getUser, postUser } from "../model/user/UserModel.js";

const router = express.Router();

// post

router.post("/", async (req, res, next) => {
  try {
    const result = await postUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "success",
        })
      : res.json({
          status: "error",
          message: "unable to post user",
        });
  } catch (error) {
    next(error);
  }
});

// get

router.get("/", async (req, res, next) => {
  try {
    const result = await getUser();
    // console.log(result)

    res.json({
      status: "success",
      message: "Successfully get user",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
