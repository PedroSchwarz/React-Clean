import { NetworkInfo } from "../../../../../core/network/NetworkInfo";
import { Result } from "../../../domain/entities/Result";
import PostsRepository from "../../../domain/repositories/PostsRepository";
import { PostsLocalDataSource } from "../../datasources/PostsLocalDataSource";
import { PostsRemoteDataSource } from "../../datasources/PostsRemoteDataSource";
import { PostModel } from "../../models/PostModel";

export default class PostsRepositoryImpl implements PostsRepository {
    constructor(private network: NetworkInfo, private remote: PostsRemoteDataSource, private local: PostsLocalDataSource) {};

    async getPosts(page: number): Promise<Result> {
        if (this.network.checkIsConnected()) {
            const { data } = await this.remote.getPosts(page);
            const posts = data.data.map(el => new PostModel(el.id, el.user_id, el.title, el.body).toPost());
            const totalPages = data.meta.pagination.pages;

            this.local.cachePostsResult({ posts, totalPages: 1 });

            return {
                posts,
                totalPages
            };
        } else {
            return this.local.getCachedPostsResult();
        }
    }
}