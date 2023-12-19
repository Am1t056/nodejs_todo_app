import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";




export const app=express();

config({
    path:"./data/config.env",
})

//using middlewares(error for req.body not defined)
app.use(express.json()); //make sure to be used first of middlewares
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
}));

//using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);






app.get("/",(req,res)=>{
    res.send("Hi!");
});


 //using error middleware
app.use(errorMiddleware);





