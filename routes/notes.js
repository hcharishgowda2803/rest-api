import express from "express"
import {createNotes, deleteNote, getById, getNotes, updateNote} from "../controllers/notes.js";
import validators from "express-validator"


const router = express.Router();
const {body} = validators

//get all
router.get('/',getNotes)


//post method to add data
router.post('/',body('title').exists(),body('publishedYear').exists(),body('publishedYear').isNumeric(),createNotes)

//get one data using params id.
router.get('/:id',getById)


// delete data
router.delete('/:id',deleteNote)

//update data
router.put('/:id',updateNote)

export default router;
