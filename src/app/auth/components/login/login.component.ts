import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/Post';
import { User } from 'src/app/core/interfaces/User';
import { PostsService } from 'src/app/posts/services/posts.service';
import { StoragePostsService } from 'src/app/posts/storage/storage-posts.service';
import { take } from 'rxjs/operators';

import Swal from'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { UserStatusService } from '../../services/user-status.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginForm: FormGroup;
  
  constructor(private postsService:PostsService,private storagePostsService:StoragePostsService, private router:Router,private authService:AuthService,private userStatusService:UserStatusService,private _builder:FormBuilder) { 
    this.loginForm=_builder.group({
      password:['',[Validators.required]],
      email:['',[Validators.required]]//,Validators.email
    });
  
    

  }


  login(){
    //To login, enter an id in the email field, 1, 2,3, 4,5
    this.authService.login(this.loginForm.get('email').value).subscribe(usera=>{  
      const user:User=JSON.parse(JSON.stringify(usera));     
      this.userStatusService.setUser(user);
      
      Swal.fire({
        title: 'Wellcome!',
        text: '',
        showConfirmButton: false,
        timer: 1500,
        icon:"success"
        
      }).then((result) => {
        this.router.navigate(['/posts/all']);
    });    
    })    
  }

  ngOnInit(): void {
    this.postsService.getList().subscribe(list=>{
      let listPosts:Post[]=JSON.parse(JSON.stringify(list));         
      this.storagePostsService.setListPost(listPosts);
    })



  }

}
