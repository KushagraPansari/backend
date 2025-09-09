
import dotenv from 'dotenv';
import connectDB from './db/index.js';

import {app} from './app.js';

dotenv.config({
    path:'./.env'
});


const PORT = process.env.PORT || 8000;

connectDB()

.then(()=>{
    app.on("error",(err)=>{
        console.log("server error",err);
        process.exit(1);
    })

    app.listen(PORT, ()=>{
        console.log(`server is running on port: ${PORT}`)
    })
})

.catch((err)=>{
    console.log("mongodb connection failed : ", err);
    process.exit(1);
})















