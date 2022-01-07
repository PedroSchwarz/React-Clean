import { Result } from "../../entities/Result";
import PostsRepository from "../../repositories/PostsRepository";

export default class GetPosts {
    constructor(private repository: PostsRepository) {};

    async execute(page: number): Promise<Result> {
        return this.repository.getPosts(page);
    }
}
