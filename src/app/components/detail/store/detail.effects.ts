import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap, switchMap } from 'rxjs/operators';

import { PostService } from 'src/app/services/post.service';
import * as DetailActionTypes from './detail.actions';

@Injectable()

export class DetailEffects {

    loadPost = createEffect(() =>
        this.actions$.pipe(
            ofType(DetailActionTypes.getPost),
            mergeMap((action) => this.postService.getPost(action.postId)
                .pipe(
                    map(post => ({ type: DetailActionTypes.fetchPostSuccess, post })),
                    catchError(() => of({ type: DetailActionTypes.fetchPostFail }))
                )
            )
        )
    );

    constructor(private postService: PostService, private actions$: Actions) { }

}
