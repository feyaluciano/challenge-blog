import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/Post';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Albumn } from 'src/app/core/interfaces/Albumn';

@Injectable({
  providedIn: 'root'
})
export class AlbumnsService {
api_url:String=environment.apiEndPoint;  
constructor(private _http:HttpClient) { }

getList():Observable<Albumn[]>{        
  return this._http.get<Albumn[]>(`${this.api_url}/albums`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}

getPhotosByIdAlbum(id:number):Observable<Albumn[]>{        
  return this._http.get<Albumn[]>(`${this.api_url}/albums/${id}/photos`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}


}