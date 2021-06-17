import express from 'express';

import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

//importing middleware
import auth from '../middleware/auth.js';

const router=express.Router();

router.get('/',getPosts);
router.post('/',auth,createPost); //passing 'auth' middleware as an argument will allow us to check for req.userId
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);

export default router;