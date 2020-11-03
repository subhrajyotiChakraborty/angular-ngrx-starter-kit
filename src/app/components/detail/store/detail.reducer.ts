import { Action, createReducer, on } from '@ngrx/store';

import { Post } from '../../posts/posts.model';
import * as DetailActionTypes from './detail.actions';

export interface State {
    post: Post;
}

export const initialState: State = {
    post: null
};

const detailReducer = createReducer(
    initialState,
    on(DetailActionTypes.getPostData, (state, { post }) => ({
        ...state,
        post
    })),
    on(DetailActionTypes.resetPostData, state => ({
        ...state,
        post: null
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return detailReducer(state, action);
}
