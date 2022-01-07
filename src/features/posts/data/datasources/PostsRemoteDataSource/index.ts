import { AxiosInstance, AxiosResponse } from "axios";
import { ACCESS_TOKEN, POSTS_ENDPOINT } from "../../../../../core/utils/constants/ApiConstants";
import { APIResult } from "../../models/PostModel";

export interface PostsRemoteDataSource {
    getPosts(page: number): Promise<AxiosResponse<APIResult>>
}

export class PostsRemoteDataSourceImpl implements PostsRemoteDataSource {
    constructor(private client: AxiosInstance) {};

    async getPosts(page: number): Promise<AxiosResponse<APIResult>> {
        return await this.client.get<APIResult>(`${POSTS_ENDPOINT}&access-token=${ACCESS_TOKEN}&page=${page}`);
    }
}