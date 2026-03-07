import Note from "../models/Notes.js";

export const getAllNotes= async(_,res)=>{
    try {
        // const notes=await Note.find();
        const notes=await Note.find().sort({createdAt:-1});
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes Controller",error);
        res.status(500).json({message: "Internal Server Error"});
    }
    
}

export const createNote=async(req,res)=>{
    try {
        const {title, content}=req.body;
        console.log(title, content);
        
        // const newNote=new Note({title: title, content:content});
        const note=new Note({title, content});
        const savedNote=await note.save()
        // res.status(201).json({message: "Note created successfully"});
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in createNote controller",error);
        res.status(500).json({message: "Internal Server Error"});
        
    }
}

export const updateNote=async(req,res)=>{
    try {
        const {title, content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id, {title, content},{new:true});
        if (!updatedNote) return res.status(404).json({message: "Note not found"});
        res.status(201).json(updatedNote)
    } catch (error) {
        console.error("Error in updateNote Controller",error)
        return res.status(500).json({message: "Internal Server Error"})
        
    }
}

export const deleteNote=async(req,res)=>{
    try {
        const deletedNote=await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
        return res.status(201).json({message: "Note successfully Deleted"});
    } catch (error) {
        console.log("Error in deleteNote Controller", error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const getNoteById=async(req, res)=>{
    try {
        const getNote=await Note.findById(req.params.id);
        if(!getNote) return res.status(404).json({message: "Note Not Found"})
        return res.status(201).json(getNote)
    } catch (error) {
        console.log("Error in getNoteById Controller", error);
        res.status(500).json({message: "Internal Server Error"})
    }
}


 

