export const getAllNotes=(req,res)=>{
    res.status(200).json({message:"got 10 notes"});
}

export const createNote=(req,res)=>{
    res.status(200).json({message:"Notes created succesfully"});
}

export const updateNote=(req,res)=>{
    res.status(200).json({message:"Notes updated successfully"});  
}

export const deleteNote=(req,res)=>{
    res.status(200).json({message:"Notes deleted suc"});
}



 

