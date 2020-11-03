import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './components/posts/posts.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: DetailComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
