import express from 'express'
import isAuthenticated from '../middleware/auth.js';
import { newGroupChat } from '../controllers/chatController.js';

const chatRouter = express.Router();


chatRouter.use(isAuthenticated);
chatRouter.post('/new',newGroupChat)


export default chatRouter;