import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { Post } from 'src/app/core/interfaces/Post';
import { User } from 'src/app/core/interfaces/User';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';
import { UsersService } from 'src/app/users/services/users.service';
import { PostsService } from '../../services/posts.service';
import { StoragePostsService } from '../../storage/storage-posts.service';

@Component({
  selector: 'app-new-edit-post',
  templateUrl: './new-edit-post.component.html',
  styleUrls: ['./new-edit-post.component.css']
})
export class NewEditPostComponent implements OnInit {
  form:FormGroup;
  editing:boolean;
  public post:Post;
  public user:User;
  constructor(
    private _builder:FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private storagePostsService: StoragePostsService,
    private postsService:PostsService,
    private userStatusService:UserStatusService,
    private modalService: NgbModal
  ) {
    this.form=this._builder.group({
      title:['',[Validators.required]],
      body: ['', [Validators.required]],   
    });

    this.post={};

   }


   haveErrorInputForm(input:string){
    return this.form.get(input).hasError('required') && this.form.get(input).touched;
   }


   save(){    
    if (this.form.valid) {
      if (this.userStatusService.isUserLoggedIn() ) {

        this.post={id:this.post.id,title:this.form.get('title').value,body:this.form.get("body").value,userId:this.user.id}
        return this.postsService.sendObject(this.post).subscribe(
          (respuesta) => {                                         
             const modalRef = this.modalService.open(ModalAlertComponent);
             if (this.post.id==0){
              modalRef.componentInstance.cuerpoMensaje = "The post was added successfully."
             } else {
              modalRef.componentInstance.cuerpoMensaje = "The post was updated successfully."
            }
             //this.router.navigate(['/posts/'+this.user.id]);                                                
          },
      (error) => {        
        console.log("errrr"+JSON.stringify(error));      
          } ,
          () => {         
              }  
      );
    }
    else {
      alert("You musst login");//PONER UN TOAST ACÁ, 
    }
  }
  else {   
    this.form.markAllAsTouched();
  }


   }

  ngOnInit() {
    this.user=this.userStatusService.getUser();
    if (typeof this.route.snapshot.params['postId'] !== 'undefined') {
      this.editing=true;
      this.post=this.storagePostsService.getPostsById(this.route.snapshot.params['postId']);
      this.form.patchValue(JSON.parse(JSON.stringify(this.post)));
    }else {
      this.post.id=0;
    }


  }

}
