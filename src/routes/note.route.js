import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as noteController from '../controllers/note.controller';

const router = express.Router();

// router for creating new note
router.post('/', userAuth, noteController.create);

//router for updating existing note
router.put('/:_id', userAuth, noteController.update);

//router for reading particular note
router.get('/:_id', userAuth, noteController.read);

// router for deleting note from exisitng notes
router.delete('/:_id', userAuth, noteController.remove);

//router for reading all the notes
router.get('',userAuth, noteController.getALL);

export default router;

