import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { GithubUser, Message, users } from '../models';

class Service {
    static getAllUsers = async (): Promise<GithubUser[]> => {
        return users
    }

    static getUser = async (userId: string): Promise<GithubUser|Message> => {
        const found = users.find((u) => u.id === userId);
        if (!found)  return { message: "User Not Found!" };
        return found
    }

    static createUser = async (user:GithubUser): Promise<GithubUser> => {
        const newUser = {...user, id: uuidv4()}
        users.push(newUser);
        return newUser;
    }

    static updateUser = async (req: Request): Promise<GithubUser|Message> => {
        const {body, params: { userId }} = req;
        const index = users.findIndex((u) => u.id === userId);
        if (index === -1)  return { message: "User Not Found!" };
        users[index] = {id: userId, ...body};
        return users[index];
    }

    static deleteUser = async (userId: string): Promise<Message> => {
        const index = users.findIndex((u) => u.id === userId);
        if (index === -1)  return { message: "User Not Found!" };
        users.splice(index, 1);
        return { message: "User Deleted!"}
    }
}

export default Service;