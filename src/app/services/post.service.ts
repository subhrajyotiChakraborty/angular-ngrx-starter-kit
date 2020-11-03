import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../components/posts/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(postId: string) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}
