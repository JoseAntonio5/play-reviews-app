export interface Game {
    _id?: string;
    title: string;
    description: string;
    genre: string;
    imageUrl: string;
    createdAt?: Date;
}