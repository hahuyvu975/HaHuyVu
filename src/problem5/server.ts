import dotenv from 'dotenv';
import express from "express";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello 213 !");
});
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
