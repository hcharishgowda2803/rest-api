import express from "express"
import {createNotes, deleteNote, getById, getNotes, updateNote} from "../controllers/notes.js";
import {authenticateJwt} from "../controllers/auth.js";
import validators from "express-validator"


const router = express.Router();
const {body} = validators

//get all
router.get('/',authenticateJwt,getNotes)


//post method to add data
router.post('/',body('title').exists(),body('publishedYear').exists(),body('publishedYear').isNumeric(),authenticateJwt,createNotes)

//get one data using params id.
router.get('/:id',authenticateJwt,getById)


// delete data
router.delete('/:id',authenticateJwt,deleteNote)

//update data
router.put('/:id',authenticateJwt,updateNote)

export default router;
