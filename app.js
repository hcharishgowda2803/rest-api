import express from 'express';
import bodyParser from 'body-parser';
import notesRoute from '../api - 1stage/routes/notes.js'


const app = express();
const Port = 3000;


app.use(bodyParser.json());

//default handler
app.get('/',(req,res)=>{
    res.send('working')
})

app.use('/notes',notesRoute)




app.listen(Port,()=>{
    console.log('port listing at'+Port)
})


