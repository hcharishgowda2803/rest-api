import express from 'express';
import bodyParser from 'body-parser';
import notesRoute from '../api - 1stage/routes/notes.js';
import authRoute from "../api - 1stage/routes/auth.js"


const app = express();
const Port = 3000;


app.use(bodyParser.json());

//default handler
app.get('/',(req,res)=>{
    res.send('working')
})



app.use('/auth',authRoute)
app.use('/notes',notesRoute)




app.listen(Port,()=>{
    console.log('port listing at'+Port)
})


