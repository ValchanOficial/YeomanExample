export interface GithubUser {
    id: string;
    name: string;
    bio: string;
    url: string;
}

export const users: GithubUser[] = []

export interface Message {
    message: string;
}