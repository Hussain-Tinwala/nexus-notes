import express from "express"
import notesRoutes from "./routes/notes.routes.js"
import { createNote, deleteNote, getAllNotes, updateNote } from "./contollers/notes.controller.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();
const PORT=process.env.PORT || 5001;

const app=express()
connectDB();

app.use('/api/notes', notesRoutes);

app.listen(5001, ()=>{
    console.log("Server running on PORT: 5001");
})