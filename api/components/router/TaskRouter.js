import express from "express";
import { getUser, postUser, updateUser } from "../model/users/UserModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await postUser(req.body);
    console.log(result);

    result?._id
      ? res.json({
          status: "200 OK",
          message: "posted",
        })
      : res.json({
          status: "404 error",
          message: "unable to add user",
        });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const result = await getUser();
    res.json({
      status: "200 OK",
      message: "Success",
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;
    const filter = { _id };
    // const userObj = {...rest}
    const result = await updateUser(filter, rest);
    result?._id
      ? res.json({
          status: "200 OK",
          message: "updated",
        })
      : res.json({
          status: "404 error",
          message: "unable to update the  user",
        });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});
router.delete("/", (req, res, next) => {
  res.json({
    status: "200 OK",
    message: "deleted",
  });
});

export default router;
