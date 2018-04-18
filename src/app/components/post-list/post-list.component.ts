import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../domain/ipost';
import { PostsListService } from '../../services/posts-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  data: Ipost[];

  constructor(private service: PostsListService) { }

  ngOnInit() {
    this.service.getAllPosts().subscribe(
      posts => this.data = posts
    );
  }

}
