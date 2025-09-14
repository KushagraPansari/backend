import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:"16kb"})); //Prevents someone from sending a huge JSON payload that could crash your server (DoS protection).
app.use(express.urlencoded({extended:true,limit:"16kb"}));//Parses form data (from HTML forms like <form method="POST">
app.use(express.static("public"))//Serves static files (like images, CSS, JS, PDFs, etc.) directly from the public folder.
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)


export {app};