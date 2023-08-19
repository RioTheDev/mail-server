import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(25, () => {
  console.log("Running on 80");
});
