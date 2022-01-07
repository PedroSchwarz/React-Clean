import { Result } from "../../entities/Result";

export default interface PostsRepository {
    getPosts(page: number): Promise<Result>;
}