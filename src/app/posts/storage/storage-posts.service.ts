import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from 'src/app/core/interfaces/Post';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root',
})
export class StoragePostsService {
  private listPosts: Post[] = [];
  public storagePosts$: Subject<Post[]>;

  constructor() {
    this.storagePosts$ = new Subject();
  }

  public getHandlerPosts$(): Observable<Post[]> {
    return this.storagePosts$.asObservable();
  }

  setListPost(listPosts: Post[]) {
    this.listPosts = listPosts;
    localStorage.setItem('posts', JSON.stringify(listPosts));
  }

  getlength() {
    return this.listPosts.length;
  }

  addPost(post: Post) {
    this.listPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(this.listPosts));
  }
  deletePostById(id: string) {
    let list = this.getPosts();
    let index;
    let p=0;
    let ok=true;
    while (p < list.length && (ok)  ) {
      if (list[p].id == id) {
        index = p;
        ok=false;
      }
      p++;
    }
    list.splice(index, 1);
    this.setListPost(list);
  }

  getPosts() {
    return JSON.parse(localStorage.getItem('posts'));
  }

  getPostsByUserId(userId: string) {
    let listPosts: Post[] = JSON.parse(localStorage.getItem('posts'));
    listPosts = listPosts.filter((x) => x.userId.toString() === userId);
    return listPosts;
  }
}
