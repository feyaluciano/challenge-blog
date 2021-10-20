import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/Post';
import { PostsService } from '../../services/posts.service';
import { StoragePostsService } from '../../storage/storage-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public listPosts:Post[]=[];

  constructor(private route: ActivatedRoute,private storagePostsService:StoragePostsService,private router:Router,private postsService:PostsService) { }

  
  getPosts(){
    this.listPosts=this.storagePostsService.getPosts();
    this.storagePostsService.storagePosts$.next(this.listPosts);
  }

  getPostsByUserId(userId:number){    
    this.listPosts=this.storagePostsService.getPostsByUserId(userId.toString());   
    this.storagePostsService.storagePosts$.next(this.listPosts);
  }

              
  // getPosts(){
  //     this.postsService.getList().subscribe(posts => {
  //       this.listPosts=JSON.parse(JSON.stringify(posts));
  //     })
  // }    
  
  
  
  ngOnInit(): void {
    this.storagePostsService.getHandlerPosts$().subscribe(list=>{      
      console.error(list)      
      this.listPosts=JSON.parse(JSON.stringify(list));
    });



    if (typeof this.route.snapshot.params['userId'] !== 'undefined') {      
      this.getPostsByUserId(this.route.snapshot.params['userId']);
    } else {      
      this.getPosts();
    }


    
  }

}
