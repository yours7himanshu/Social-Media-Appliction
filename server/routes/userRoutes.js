import express from 'express'
import  { getUser, login, logoutUser, register } from '../controllers/userController.js'
import { singleAvatar } from '../middleware/multer.js';
import isAuthenticated from '../middleware/auth.js';


const userRouter = express.Router();


userRouter.post('/register',singleAvatar,register);
userRouter.post('/login',login);
userRouter.get('/logout',logoutUser);
userRouter.get('/profile',isAuthenticated,getUser)

export default userRouter;