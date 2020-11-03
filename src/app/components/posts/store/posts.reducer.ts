import { Action, createReducer, on } from '@ngrx/store';

import * as PostActions from './posts.actions';

import { Post } from '../posts.model';

export interface State {
    posts: Post[];
}

export const initialState: State = {
    posts: []
};

const postReducer = createReducer(
    initialState,
    on(PostActions.getAllPosts, (state, { posts }) => ({
        ...state,
        posts
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return postReducer(state, action);
}
