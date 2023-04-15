import { Comment } from "./Comment";
export interface Game {
    _id?: string,
    title: string,
    description: string,
    genre: string,
    imageUrl: string,
    comments?: Comment[],
    createdAt?: Date,
}