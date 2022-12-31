import express from "express";

const app = express();

const PORT = 8000;

app.use("/", (req, res, next) => {
  res.json({
    status: "200 OK",
    message: "Success",
  });
});
app.get("/", (req, res, next) => {
  res.json({
    status: "200 OK",
    message: "Success",
  });
});
app.post("/", (req, res, next) => {
  res.json({
    status: "200 OK",
    message: "posted",
  });
});
app.put("/", (req, res, next) => {
  res.json({
    status: "200 OK",
    message: "updated",
  });
});
app.delete("/", (req, res, next) => {
  res.json({
    status: "200 OK",
    message: "deleted",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server running at http://localhost:${PORT}`);
});
