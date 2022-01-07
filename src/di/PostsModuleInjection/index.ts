import ApiClient from "../../core/data/services/ApiClient";
import { NetworkInfoImpl } from "../../core/network/NetworkInfo";
import { BASE_URL } from "../../core/utils/constants/ApiConstants";
import { PostsLocalDataSourceImpl } from "../../features/posts/data/datasources/PostsLocalDataSource";
import { PostsRemoteDataSourceImpl } from "../../features/posts/data/datasources/PostsRemoteDataSource";
import PostsRepositoryImpl from "../../features/posts/data/repositories/PostsRepositoryImpl";
import GetPosts from "../../features/posts/domain/usecases/GetPosts";

const buildPostsModule = (): GetPosts => {
    const client = new ApiClient(BASE_URL).buildClient();
    const network = new NetworkInfoImpl();
    const remote = new PostsRemoteDataSourceImpl(client);
    const local = new PostsLocalDataSourceImpl();
    const repository = new PostsRepositoryImpl(network, remote, local);
    return new GetPosts(repository);
}

export default buildPostsModule;