import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PostService } from '../../../services/post.service';
import * as PostActionTypes from './posts.actions';

@Injectable()

export class PostEffects {

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostActionTypes.fetchPostsStart),
            mergeMap(() => this.postService.getPosts()
                .pipe(
                    map(posts => ({ type: PostActionTypes.fetchPostsSuccess, posts })),
                    catchError(() => of({ type: PostActionTypes.fetchPostsError }))
                )
            )
        )
    );

    constructor(private actions$: Actions, private postService: PostService) { }
}
