import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { Post } from 'src/app/core/interfaces/Post';
import { User } from 'src/app/core/interfaces/User';
import { StoragePostsService } from 'src/app/posts/storage/storage-posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user:User;
  public cantMyPost:number;
  constructor(private router:Router,private userStatusService:UserStatusService,private storagePostsService:StoragePostsService) { }


  logout(){
    this.router.navigate(['/posts/all']);  
  }



  ngOnInit(): void {
    this.user=this.userStatusService.getUser();
    
    this.storagePostsService.setListPost(this.storagePostsService.getPosts());

    this.storagePostsService.getPosts();
    this.storagePostsService.getHandlerPosts$().subscribe(listPost=>{
      let list:Post[]=JSON.parse(JSON.stringify(listPost));      
      let id=this.user.id;            
      list = list.filter((x) => x.userId === id);
      this.cantMyPost=list.length;    
    })

    


  }

}
