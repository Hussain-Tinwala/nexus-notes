import express from "express"
import notesRoutes from "./routes/notes.routes.js"
import { createNote, deleteNote, getAllNotes, updateNote } from "./contollers/notes.controller.js";

const app=express()
app.use('/api/notes', notesRoutes);

app.listen(5001, ()=>{
    console.log("Server running on PORT: 5001");
})
app.get(5001,getAllNotes)
app.post(5001,createNote)
app.put(5001,updateNote)
app.delete(5001,deleteNote)