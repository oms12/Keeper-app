import express from 'express';

import { getpost, createPost, deletePost , updatePost } from '../controllers/notes.js';

import auth from "../Middleware/auth.js"

const router = express.Router();
router.get("/", auth ,getpost);
router.post('/add', auth, createPost);
router.delete('/:id',auth, deletePost);
router.post('/update/:id',auth, updatePost);




export default router;