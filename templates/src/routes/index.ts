import express, { Request, Response } from 'express';
import Controller from '../controllers';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => res.json({message: "Valchan esteve aqui"}));

routes.post('/users', Controller.createUser);

routes.get('/users', Controller.getUsers);

routes.get('/users/:userId', Controller.getUser);

routes.put('/users/:userId', Controller.updateUser);

routes.delete('/users/:userId', Controller.deleteUser);

export default routes;