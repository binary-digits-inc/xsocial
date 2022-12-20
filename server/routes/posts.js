import express from 'express';
import {
    getFeedPosts,
    getUserPosts,
    likePosts,
} from '../controllers/posts.js';
import {verifyToken} from '../middleware/auth.js';


const router = express.Router();
//read
router.get('/', verifyToken, getFeedPosts);//gets all the posts from the database
router.get('/:userId/posts', verifyToken, getUserPosts);//gets the specific user posts


//update
router.patch('/:id/posts', verifyToken, likePosts);

  
export default router;