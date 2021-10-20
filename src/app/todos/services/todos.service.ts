import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/Post';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/core/interfaces/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
api_url:String=environment.apiEndPoint;  
constructor(private _http:HttpClient) { }

getList():Observable<ToDo[]>{        
  return this._http.get<ToDo[]>(`${this.api_url}/todos`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}

getTodosByIdUser(id:number):Observable<ToDo[]>{        
  return this._http.get<ToDo[]>(`${this.api_url}/users/${id}/todos`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}
}
