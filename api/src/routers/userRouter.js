import express from "express";
import { getUser } from "../model/user/UserModel.js";

const router = express.Router();

// post

router.post("/", async(req, res, next) => {

  try {
  const result  = await postUser(req.body)

  
    result?._id ?
    res.json({
      status: "success",
      message: "success",
    }): 
    res.json({
      status: "error",
      message: "unable to post user",
    })
    
  } catch (error) {
    next(error)
  }
});

// get

router.get("/", (req, res, next) => {

  try {
    const result = getUser(req.body)
   
    result?._id ?
    res.json({
      status: "success",
      message: "Successfully get user",
    })  :
    res.json({
      status: "error",
      message: "unable  get user",})
    
    
  } catch (error) {
    next(error)
  }
});

export default router;
