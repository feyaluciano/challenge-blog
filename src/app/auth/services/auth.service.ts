import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
api_url:String=environment.apiEndPoint;     
constructor(private _http:HttpClient) { }


login(id:number):Observable<User>{        
  return this._http.get<User>(`${this.api_url}/users/${id}`, {headers : {'Content-Type' : 'application/json; charset=UTF-8'}     
});
}

}
