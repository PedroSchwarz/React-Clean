import React, { ReactNode, useCallback, memo } from 'react'
import { useSelector } from 'react-redux';
import { POSTS_STATE } from '../../stores/Posts/reducer';
import PagesController from '../PagesController';
import PostItem from '../PostItem';
import { Card, List } from './styles';

const PostsList: React.FC = () => {
    const { posts } = useSelector<{posts: POSTS_STATE}, POSTS_STATE>(state => state.posts);

    const handleRenderPostItems = useCallback((): ReactNode[] => {
        return posts.map(el => <PostItem key={el.id} post={el} />);
    }, [posts]);

    return (
        <Card>
            <Card.Title>Últimas postagens</Card.Title>

            <List>
                <List.Header>
                    <p>Titulo</p>
                    <p>Conteúdo</p>
                </List.Header>
                <List.Body>
                    { handleRenderPostItems() }
                </List.Body>
                <List.Footer>
                    <p>Exibindo {posts.length} postagens</p>
                    <PagesController />
                </List.Footer>
            </List>
        </Card>
    );
};

export default memo(PostsList);