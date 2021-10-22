import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { ToDo } from 'src/app/core/interfaces/ToDo';
import { User } from 'src/app/core/interfaces/User';
import { StoragePostsService } from 'src/app/posts/storage/storage-posts.service';
import { TodosService } from '../../services/todos.service';
import { StorageTodosService } from '../../storage/storage-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public user: User;
  public listToDos: ToDo[] = [];
  public titleSection: string = '';
  form: FormGroup;

  constructor(
    private userStatusService: UserStatusService,
    private route: ActivatedRoute,
    private storageTodosService: StorageTodosService,
    private router: Router,
    private toDosService: TodosService,
    private storagePostsService:StoragePostsService,
    private _builder: FormBuilder
  ) {
    this.form = this._builder.group({      
      search_posts: ['', [Validators.required]],            
    });
  }

  viewDescription(id) {
    var element = document.getElementById('ToDo' + id);
    if (element.classList.contains('collapse')) {
      element.classList.remove('collapse');
    } else {
      element.classList.add('collapse');
    }
  }

  getToDos() {
    this.listToDos = this.storageTodosService.getToDos();
    this.storageTodosService.storageToDos$.next(this.listToDos);
  }

  getToDosByUserId(userId: number) {
    this.listToDos = this.storageTodosService.getToDosByUserId(
      userId.toString()
    );
    this.storageTodosService.storageToDos$.next(this.listToDos);
  }

  ngOnInit() {
    this.user = this.userStatusService.getUser();
    this.storageTodosService.getHandlerToDos$().subscribe((list) => {      
      this.listToDos = JSON.parse(JSON.stringify(list));
    });

    if (typeof this.route.snapshot.params['userId'] !== 'undefined') {
      this.getToDosByUserId(this.route.snapshot.params['userId']);
      this.titleSection = 'These are your To Dos';
    } else {
      this.titleSection = 'These are the To Dos of your friends';
      this.getToDos();
    }


    let listPosts=this.storagePostsService.getPosts();
    this.storagePostsService.storagePosts$.next(listPosts);

  }
}
