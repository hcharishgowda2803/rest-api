import express from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';



const app = express();
const Port = 3000;

let notes = [];

app.use(bodyParser.json());

//default handler
app.get('/',(req,res)=>{
    res.send('working')
})

//get all

app.get('/notes',(req,res)=>{
    res.send(notes);
})


//post method to add data
app.post('/notes',async (req,res)=>{
    const note = req.body
    notes.push({... note,id:uuidv4()});
    res.send('notes created successfully');
})

//get one data using params id.
app.get('/notes/:id',(req,res)=>{
   const {id} = req.params
   const note = notes.find((note)=>note.id === id)
    console.log(note)
    res.send(note)
})


// delete data
app.delete('/notes/:id',(req,res)=>{
    const {id} = req.params;
     notes = notes.filter((note)=> note.id !== id);
    res.send(`this note is deleted ${notes}`)
})

//update data
app.put('/notes/:id',(req,res)=>{
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

})



app.listen(Port,()=>{
    console.log('port listing at'+Port)
})


