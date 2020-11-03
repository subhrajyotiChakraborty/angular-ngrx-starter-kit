import { createAction, props } from '@ngrx/store';

import { Post } from '../../posts/posts.model';

export const fetchPostStart = '[Detail page] fetch post start';
export const fetchPostSuccess = '[Detail page] fetch post success';
export const fetchPostFail = '[Detail page] fetch post fail';
export const resetData = '[Detail page] reset post data';

export const getPost = createAction(fetchPostStart, props<{ postId: string }>());
export const getPostData = createAction(fetchPostSuccess, props<{ post: Post }>());
export const resetPostData = createAction(resetData);
