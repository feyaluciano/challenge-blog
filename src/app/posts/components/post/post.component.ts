import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:Post;
  public listCommentsApi:Comment[]=[];  
  constructor(private router:Router,private postsService:PostsService) { }
        
  getComments(id:number){   
      this.postsService.getCommentsByIdPost(id).subscribe(comments => {       
        this.post.listComments=[];
        this.post.listComments=JSON.parse(JSON.stringify(comments))        
      })
  }      
  
  ngOnInit(): void {     
  }
}
