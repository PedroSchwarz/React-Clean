import { Post } from "../../../domain/entities/Post";
import * as Types from "./types";

export type POSTS_STATE = {
  posts: Post[];
  error?: string;
  loading: boolean;
}

const INTIAL_STATE: POSTS_STATE = {
  posts: [],
  error: null,
  loading: true
};

export default function (state = INTIAL_STATE, action: any): POSTS_STATE {
  const { type, payload } = action;

  switch (type) {
    /**
     * SET_POSTS
     *
     * handle SET_POSTS action
     *
     */
    case Types.SET_POSTS:
      return { ...state, posts: payload.posts };

    /**
     * SET_LOADING
     *
     * handle SET_LOADING action
     *
     */
    case Types.SET_LOADING:
      return { ...state, loading: payload.loading };

    /**
     * SET_ERROR
     *
     * handle SET_ERROR action
     *
     */
    case Types.SET_ERROR:
      return { ...state, error: payload.error };

    /**
     * DEFAULT
     *
     * handle default action
     *
     */
    default:
      return { ...state };
  }
}
