export interface Comment {
    _id?: string;
    user: string,
    rating: number,
    comment: string,
    createdAt?: Date,
}