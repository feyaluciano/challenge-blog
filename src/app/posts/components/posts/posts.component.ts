import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public listPosts:Post[]=[];

  constructor(private router:Router,private postsService:PostsService) { }

  
  getPosts(){
      this.postsService.getList().subscribe(posts => {
        this.listPosts=JSON.parse(JSON.stringify(posts));
      })
  }
  
  
  ngOnInit(): void {
    this.getPosts();
  }

}
