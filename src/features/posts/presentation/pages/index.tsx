import React from 'react'
import { Provider } from 'react-redux';
import store from '../stores';
import Posts from './Posts';

const PostsScreen: React.FC = () => {
    return (
        <Provider store={store}>
            <Posts />
        </Provider>
    );
}

export default PostsScreen;