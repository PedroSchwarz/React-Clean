import { Result } from "../../../domain/entities/Result";

export interface PostsLocalDataSource {
    cachePostsResult(result: Result): void
    getCachedPostsResult(): Result
}

export class PostsLocalDataSourceImpl implements PostsLocalDataSource {
    cachePostsResult(result: Result): void {
        localStorage.setItem('result', JSON.stringify(result));
    }

    getCachedPostsResult(): Result {
        const result = localStorage.getItem('result');
        if (!result) {
            throw new Error("Nenhum post para mostrar");
        } else {
            return JSON.parse(result) as Result;
        }
    }
}