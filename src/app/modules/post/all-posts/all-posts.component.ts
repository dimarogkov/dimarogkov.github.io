import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/components/user/services/user.service';
import { IPost } from '../models/post.models';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  id: string
  posts: IPost[]=[]

  constructor(private userService : UserService, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(value => {
      this.id = value.id;
      this.userService.getUserPosts(this.id).subscribe(value => this.posts = value);
    });
  }

  ngOnInit(): void {
  }

}
