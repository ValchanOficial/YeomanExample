import { Request, Response } from "express";
import Service from '../service'

class Contoller {
    static createUser = async (req: Request, res: Response) => {
        const data = await Service.createUser(req.body)
        return res.json(data);
    }

    static getUsers = async (req: Request, res: Response) => {
        const data = await Service.getAllUsers();
        return res.json(data);
    }

    static getUser = async (req: Request, res: Response) => {
        const data = await Service.getUser(req.params.userId);
        return res.json(data);
    }

    static updateUser = async (req: Request, res: Response) => {
        const data = await Service.updateUser(req);
        return res.json(data);
    }

    static deleteUser = async (req: Request, res: Response) => {
        const data = await Service.deleteUser(req.params.userId);
        return res.json(data);
    }
}

export default Contoller;