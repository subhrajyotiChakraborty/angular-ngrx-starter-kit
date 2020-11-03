import { createAction, props } from '@ngrx/store';

import { Post } from '../posts.model';

export const fetchPostsStart = '[Post Page] fetch all posts start';
export const fetchPostsSuccess = '[Post Page] fetch all posts success';
export const fetchPostsError = '[Post Page] fetch all posts error';

export const loadPosts = createAction(fetchPostsStart);
export const getAllPosts = createAction(fetchPostsSuccess, props<{ posts: Post[] }>());
