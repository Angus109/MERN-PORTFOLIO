import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import { dbConnection } from "./database/connection.js";
import { errorMiddleware } from "./middlewares/error.js";
import timelineRouter from "./routes/timelineRouter.js";
import messageRouter from "./routes/messageRouter.js";
import skillRouter from "./routes/skillRouter.js";
import softwareApplicationRouter from "./routes/softwareApplicationRouter.js";
import projectRouter from "./routes/projectRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
dotenv.config({path: "config.env" });
const PORTFOLIO_URL = process.env.PORTFOLIO_URL;
const DASHBOARD_URL = process.env.DASHBOARD_URL;
const BACKEND_URL = process.env.BACKEND_URL;

app.use(
  cors({
    origin: [PORTFOLIO_URL, DASHBOARD_URL, BACKEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/timeline", timelineRouter);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/softwareapplication", softwareApplicationRouter);
app.use("/api/v1/project", projectRouter);

dbConnection();
app.use(errorMiddleware);


export default app;
