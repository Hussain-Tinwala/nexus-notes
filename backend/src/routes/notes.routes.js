import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../contollers/notes.controller.js";

const router=express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;