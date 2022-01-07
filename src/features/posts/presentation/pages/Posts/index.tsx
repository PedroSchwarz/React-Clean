import React, { useEffect, useContext, useCallback, memo } from 'react';
import { InjectionContext } from '../../../../../di/InjectionContext';
import PostsList from '../../widgets/PostsList';
import { ErrorCard, Loading, Main } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { PAGES_STATE } from '../../stores/Pages/reducer';
import { postsActions } from '../../stores/Posts';
import { POSTS_STATE } from '../../stores/Posts/reducer';

const Posts: React.FC = () => {
    const { currentPage } = useSelector<{pages: PAGES_STATE}, PAGES_STATE>(state => state.pages);
    const { posts, error, loading } = useSelector<{posts: POSTS_STATE}, POSTS_STATE>(state => state.posts);
    const dispatch = useDispatch();
    const { getPosts: usecase } = useContext(InjectionContext);

    useEffect(() => {
        handleExecuteUseCase();
    }, [currentPage]);

    const handleExecuteUseCase = useCallback(async () => {
        dispatch(postsActions.fetchPosts(usecase));
    }, []);

    return (
        <Main>
            {
                loading &&
                <Loading>
                    <p>Carregando...</p>
                </Loading>
            }
            {
                posts.length > 0 &&
                <PostsList />
            }
            {
                !loading && error &&
                <ErrorCard>
                    <p>{ error }</p>
                    <ErrorCard.TryAgainButton onClick={handleExecuteUseCase}>
                        Tentar Novamente
                    </ErrorCard.TryAgainButton>
                </ErrorCard>
            }
        </Main>
    )
};

export default memo(Posts);