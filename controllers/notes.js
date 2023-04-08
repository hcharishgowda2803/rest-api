
import {v4 as uuidv4} from "uuid";

let notes = []

export const getNotes = (req, res)=>{
    res.send(notes);
}

export const getById = (req,res)=>{
    const {id} = req.params
    const note = notes.find((note)=>note.id === id)
    console.log(note)
    res.send(note)
}

export const createNotes = (req,res)=>{
    const note = req.body
    notes.push({... note,id:uuidv4()});
    res.send('notes created successfully');
}

export const deleteNote = (req,res)=>{
    const {id} = req.params;
    notes = notes.filter((note)=> note.id !== id);
    res.send(`this note is deleted ${notes}`)
}


export const updateNote=(req,res)=>{
    const {id}=req.params;
    const {title,author,publishedYear,publisher} = req.body;
    const note = notes.find((note)=>note.id === id);
    if(title){
        note.title = title;
    }else if(author){
        note.author = author;
    }else if(publishedYear){
        note.publishedYear = publishedYear;
    }else if(publisher){
        note.publisher = publisher;
    }
    res.send('updated')

}
