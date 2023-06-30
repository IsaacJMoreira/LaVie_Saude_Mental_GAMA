import { Router } from 'express';
import { UsersController } from '../controllers/users/users.controller.js';
import { validate } from '../middlewares/validate.js';
import { AuthController } from '../controllers/auth/auth.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const routes = Router();


// AUTH

const authController = new AuthController();

routes.post('/login', authController.login)
routes.post('/validate', authController.validate)


const usersController = new UsersController();


routes.use(auth) // middleware auth
routes.get('/users',  usersController.findAll)
routes.post('/users', validate, usersController.create) 


export default routes;