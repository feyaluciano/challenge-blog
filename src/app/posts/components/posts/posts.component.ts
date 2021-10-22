import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
  public sending:boolean;
  obs:Subscription;
  form: FormGroup;

  constructor(private _builder:FormBuilder, private route: ActivatedRoute,private storagePostsService:StoragePostsService,private router:Router,private postsService:PostsService) {
    this.form = this._builder.group({      
      search_posts: ['', [Validators.required]],            
    });
   }

  
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
      this.listPosts=JSON.parse(JSON.stringify(list));
    });



    if (typeof this.route.snapshot.params['userId'] !== 'undefined') {      
      this.getPostsByUserId(this.route.snapshot.params['userId']);
    } else {      
      this.getPosts();
    }



    this.obs=this.form.valueChanges
    .pipe(debounceTime(1500))
    .subscribe(async data => {               
        this.sending=true;                       
        let  search=JSON.parse(JSON.stringify(data))          
        let req;
        if (!isNaN(search.search_posts)) {
          req=await this.storagePostsService.getPostsByUserId(search.search_posts);         
        } else {
          req=await this.storagePostsService.getPostsByTitle(search.search_posts);  
        }

        this.sending=false;
        this.listPosts=req;      
        this.storagePostsService.storagePosts$.next(this.listPosts);     
    }
    
    );          


    
  }

}
