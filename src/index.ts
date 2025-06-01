import express, { Express } from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
const app: Express = express();

dotenv.config();
app.use(cookieParser());
app.use(helmet());
app.use(express.json());

const port = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
  });
});
