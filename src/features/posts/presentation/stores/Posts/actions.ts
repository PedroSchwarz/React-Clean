import GetPosts from "../../../domain/usecases/GetPosts";
import { pagesActions } from "../Pages";
import * as Types from "./types";

/**
 * fetchPosts
 *
 * handle FETCH_POSTS actions
 *
 * @param payload
 */
export function fetchPosts(usecase: GetPosts) {
  return async (dispatch, state) => {
    const { pages } = state();
    dispatch(setLoading({ loading: true }));
    try {
      const result = await usecase.execute(pages.currentPage);
      dispatch(setPosts({ posts: result.posts }));
      dispatch(pagesActions.setTotalPages({ totalPages: result.totalPages }))
    } catch (e: any) {
      dispatch(setError({ error: e.message }));
    } finally {
      dispatch(setLoading({ loading: false }));
    }
  };
}

/**
 * setPosts
 *
 * handle SET_POST actions
 *
 * @param payload
 */
 export function setPosts(payload) {
  return {
    type: Types.SET_POSTS,
    payload,
  };
}

/**
 * setLoading
 *
 * handle SET_LOADING actions
 *
 * @param payload
 */
 export function setLoading(payload) {
  return {
    type: Types.SET_LOADING,
    payload,
  };
}

/**
 * setError
 *
 * handle SET_ERROR actions
 *
 * @param payload
 */
 export function setError(payload) {
  return {
    type: Types.SET_ERROR,
    payload,
  };
}