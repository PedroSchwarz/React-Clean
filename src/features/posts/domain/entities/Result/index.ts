import { Post } from "../Post";

export type Result = {
    posts: Post[];
    totalPages: number;
}