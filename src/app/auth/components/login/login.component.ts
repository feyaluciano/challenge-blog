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
import { AlbumnsService } from 'src/app/albumns/services/albumns.service';
import { forkJoin } from 'rxjs';
import { Albumn } from 'src/app/core/interfaces/Albumn';
import { StorageAlbumnsService } from 'src/app/albumns/storage/storage-albumns.service';
import { StorageTodosService } from 'src/app/todos/storage/storage-todos.service';
import { TodosService } from 'src/app/todos/services/todos.service';
import { ToDo } from 'src/app/core/interfaces/ToDo';
import { StorageUsersService } from 'src/app/users/storage/storage-users.service';
import { UsersService } from 'src/app/users/services/users.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private storageUsersService: StorageUsersService,
    private usersService: UsersService,
    private storageTodosService: StorageTodosService,
    private todosService: TodosService,
    private storageAlbumnsService: StorageAlbumnsService,
    private albumnsService: AlbumnsService,
    private postsService: PostsService,
    private storagePostsService: StoragePostsService,
    private router: Router,
    private authService: AuthService,
    private userStatusService: UserStatusService,
    private _builder: FormBuilder
  ) {
    this.loginForm = _builder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required]], //,Validators.email
    });
  }

  login() {
    //To login, enter an id in the email field, 1, 2,3, 4,5
    this.authService
      .login(this.loginForm.get('email').value)
      .subscribe((usera) => {
        const user: User = JSON.parse(JSON.stringify(usera));
        this.userStatusService.setUser(user);

        Swal.fire({
          title: 'Wellcome!',
          text: '',
          showConfirmButton: false,
          timer: 1500,
          icon: 'success',
        }).then((result) => {
          this.router.navigate(['/posts/all']);
        });
      });
  }

  ngOnInit(): void {
    const obsListPost$ = this.postsService.getList();
    const obsListAlbums$ = this.albumnsService.getList();
    const obsListTodos$ = this.todosService.getList();
    const obsListUsers$ = this.usersService.getList();

    forkJoin([
      obsListPost$.subscribe((listP) => {
        let listPosts: Post[] = JSON.parse(JSON.stringify(listP));
        this.storagePostsService.setListPost(listPosts);
      }),
      obsListAlbums$.subscribe((listA) => {
        let listAlbumns: Albumn[] = JSON.parse(JSON.stringify(listA));
        this.storageAlbumnsService.setListAlbumn(listAlbumns);
      }),
      obsListTodos$.subscribe((listT) => {
        let listTodos: ToDo[] = JSON.parse(JSON.stringify(listT));
        this.storageTodosService.setListToDo(listTodos);
      }),
      obsListUsers$.subscribe((listU) => {
        let listUsers: ToDo[] = JSON.parse(JSON.stringify(listU));
        this.storageUsersService.setListUsers(listUsers);
      })
    ]);
  }
}
