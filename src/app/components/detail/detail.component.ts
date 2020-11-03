import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../posts/posts.model';
import * as DetailActions from './store/detail.actions';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit, OnDestroy {

  post$: Observable<Post>;

  constructor(private route: ActivatedRoute, private store: Store<{ detailObj: { post: Post } }>) {
    this.post$ = this.store.select(state => state.detailObj.post);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.dispatch(DetailActions.getPost({ postId: params.id }));
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(DetailActions.resetPostData());
  }
}
