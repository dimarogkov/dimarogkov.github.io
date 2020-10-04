import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PostComponent, AllPostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllPostsComponent}
    ])
  ],
  providers: [PostService]
})
export class PostModule { }
