import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/Post';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StoragePostsService } from '../storage/storage-posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
api_url:String=environment.apiEndPoint;  
constructor(private _http:HttpClient,private storagePostsService:StoragePostsService) { }

getList():Observable<Post[]>{        
  return this._http.get<Post[]>(`${this.api_url}/posts`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}





getCommentsByIdPost(id:number):Observable<Comment[]>{        
  return this._http.get<Comment[]>(`${this.api_url}/posts/${id}/comments`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}


deleteById(id:number):Observable<Comment[]>{        
  return this._http.delete<Comment[]>(`${this.api_url}/posts/${id}`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}


sendObject(post:Post):Observable<any>{    
  if (post.id===0) {
      this.storagePostsService.addPost(post);
      this.storagePostsService.storagePosts$.next(this.storagePostsService.getPosts());
      return this._http.post<Post>(`${this.api_url}/posts`,post, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}});    
  } else {  
    this.storagePostsService.updatePost(post);    
      return  this._http.put<Post>(`${this.api_url}/posts/${post.id}`,post, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}});     
  }  
}


}
