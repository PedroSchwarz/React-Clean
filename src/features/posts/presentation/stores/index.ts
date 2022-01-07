import { createStore, combineReducers, applyMiddleware } from 'redux';
import { pagesReducer } from './Pages';
import { postsReducer } from './Posts';
import ReduxThunk from 'redux-thunk';

const rootReducers = combineReducers({
    pages: pagesReducer,
    posts: postsReducer
});

const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

export default store;