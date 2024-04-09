import dotenv from 'dotenv';
import express from "express";
import routes from './routes/routes';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/v1', routes)

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
