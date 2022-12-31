import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./components/router/TaskRouter.js";
import { connectDb } from "./components/configDB/configDb.js";

const app = express();

const PORT = 8000;

// middleware
// app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

connectDb();

app.use("/api/v1/task", router);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server running at http://localhost:${PORT}`);
});
