import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './posts.model';
import * as PostActions from './store/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {

  posts$: Observable<{ posts: Post[] }>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{ postsObj: { posts: Post[] } }>
  ) {
    this.posts$ = this.store.select(state => state.postsObj);
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  goToDetail(postId: number) {
    this.router.navigate([`posts/${String(postId)}`]);
  }

  getAllPosts() {
    this.store.dispatch(PostActions.loadPosts());
  }

}
