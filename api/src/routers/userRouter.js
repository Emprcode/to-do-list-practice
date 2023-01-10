import express from "express";

const router = express.Router();

// post

router.post("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "success",
  });
});

// get

router.post("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "success",
  });
});

export default router;
