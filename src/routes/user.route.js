import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userLoginValidator } from '../validators/userLogin.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// router to user registration
router.post('/register', newUserValidator, userController.register);

// router to user login
router.post('/login', userLoginValidator, userController.login);


export default router;
