import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { Post } from 'src/app/core/interfaces/Post';
import { User } from 'src/app/core/interfaces/User';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { PostsService } from '../../services/posts.service';
import { StoragePostsService } from '../../storage/storage-posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  public listCommentsApi: Comment[] = [];
  public user:User;
  public sending:Boolean=false;
  constructor(
    private router: Router,
    private postsService: PostsService,
    private modalService: NgbModal,
    private storagePostsService:StoragePostsService,
    private userStatusService:UserStatusService 
  ) {}

  getComments(id: number) {
    this.sending=true;
    this.postsService.getCommentsByIdPost(id).subscribe((comments) => {
      this.post.listComments = [];
      this.post.listComments = JSON.parse(JSON.stringify(comments));
      this.sending=false;
    });
  }

  eliminar(Id: number) {
    return this.postsService.deleteById(Id).subscribe(
      (respuesta) => {
        this.storagePostsService.deletePostById(Id.toString());        
        this.storagePostsService.storagePosts$.next(this.storagePostsService.getPosts())       
      },
      (error) => {
        alert(error);
        console.log('errrr' + JSON.stringify(error));
      },
      () => {}
    );
  }

  editPost(post: Post) {    
    this.router.navigate(['/posts/edit/'+post.id]);
  }

  deletePost(post: Post) {    
    const modalRef = this.modalService.open(ModalConfirmComponent, {
      windowClass: 'animate__animated animate__bounceInDown',
    });
    modalRef.componentInstance.entidad = 'Post';
    modalRef.componentInstance.accion = 'eliminar';
    modalRef.result
      .then((ok) => {
        if (ok == 1) {
          this.eliminar(post.id);
        }
      })
      .finally(() => {})
      .catch((resu) => {       
      });
  }

  ngOnInit(): void {
    this.user=this.userStatusService.getUser();

  }
}
