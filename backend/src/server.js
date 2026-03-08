import express from "express"
import notesRoutes from "./routes/notes.routes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
import path from "path"

dotenv.config();

const PORT=process.env.PORT || 5001;
const app=express()
const __dirname=path.resolve()

if(process.env.NODE_ENV!=="production"){
    app.use(cors({
    origin:"http://localhost:5173",
    }))
}

// parse json data (req.body)
app.use(express.json());
app.use(rateLimiter)

// custom middleware
// app.use((req, res, next)=>{
//     console.log(`Request method is ${req.method}, Request URL: ${req.url}`);
// })

app.use('/api/notes', notesRoutes);


if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`);
    })
})
