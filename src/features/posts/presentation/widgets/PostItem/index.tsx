import React from 'react'
import { Post } from '../../../domain/entities/Post';
import { Item } from './styles';

type PostItemProps = {
    post: Post;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    return (
        <Item>
            <p><span>Título - </span> {post.title}</p>
            <p><span>Conteúdo - </span> {post.body}</p>
        </Item>
    );
}

export default PostItem;