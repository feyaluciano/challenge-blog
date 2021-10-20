import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/core/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class StorageUsersService {


  private listUsers:User[]=[];
  public storageUsers$: Subject<User[]>;
  
  constructor() {  
    this.storageUsers$ = new Subject();
  }
  
  
  public getHandlerUsers$(): Observable<User[]> {
    return this.storageUsers$.asObservable(); 
  }
  
  setListUsers(listUsers: User[]){   
    this.listUsers=listUsers; 
    localStorage.setItem('users',JSON.stringify(listUsers));       
  }
  
  getlength(){
    return this.listUsers.length;      
  }
  
  addAlbumn(User: User){  
    this.listUsers.push(User);
    localStorage.setItem('users',JSON.stringify(this.listUsers));       
  }
  
  
  
  getUsers(){
    return JSON.parse(localStorage.getItem('users'))
  }
  
  
  

}
