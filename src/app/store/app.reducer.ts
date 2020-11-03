import { ActionReducerMap } from '@ngrx/store';

import * as fromPost from '../components/posts/store/posts.reducer';
import * as fromDetail from '../components/detail/store/detail.reducer';

export interface AppState {
    postsObj: fromPost.State;
    detailObj: fromDetail.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    postsObj: fromPost.reducer,
    detailObj: fromDetail.reducer
};
