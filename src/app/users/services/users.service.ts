import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
api_url:String=environment.apiEndPoint;  
constructor(private _http:HttpClient) { }

getList():Observable<User[]>{        
  return this._http.get<User[]>(`${this.api_url}/users`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}





}