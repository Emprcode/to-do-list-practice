import express from 'express'

const router = express.Router()

router.get("/", (req, res, next) => {
    res.json({
      status: "200 OK",
      message: "Success",
    });
  });
  router.post("/", (req, res, next) => {
    res.json({
      status: "200 OK",
      message: "posted",
    });
  });
  router.put("/", (req, res, next) => {
    res.json({
      status: "200 OK",
      message: "updated",
    });
  });
  router.delete("/", (req, res, next) => {
    res.json({
      status: "200 OK",
      message: "deleted",
    });
  });

  export default router;