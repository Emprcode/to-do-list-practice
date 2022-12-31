import express from 'express'
import { postUser } from '../model/users/UserModel.js';

const router = express.Router()

router.get("/", (req, res, next) => {
    res.json({
      status: "200 OK",
      message: "Success",
    });
  });

router.post("/", (req, res, next) => {

    try {
        const result = postUser(req.body)

        result?._id ?
        res.json({
            status: "200 OK",
            message: "posted",
          }) :
          res.json({
            status: "404 error",
            message: "unable to add user",
          })
        
    } catch (error) {
        console.log(error.message)
        
    }

  


    ;
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