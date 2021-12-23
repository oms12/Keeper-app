import express from 'express';

import { getpost, createPost, deletePost , updatePost } from '../controllers/notes.js';

const router = express.Router();
router.get("/",getpost);
router.post('/add', createPost);
router.delete('/:id', deletePost);
router.post('/update/:id', updatePost);





export default router;