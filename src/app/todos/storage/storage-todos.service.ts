import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToDo } from 'src/app/core/interfaces/ToDo';

@Injectable({
  providedIn: 'root'
})
export class StorageTodosService {


  private listToDos:ToDo[]=[];
  public storageToDos$: Subject<ToDo[]>;
  
  constructor() {  
    this.storageToDos$ = new Subject();
  }
  
  
  public getHandlerToDos$(): Observable<ToDo[]> {
    return this.storageToDos$.asObservable(); 
  }
  
  setListToDo(listToDos: ToDo[]){   
    this.listToDos=listToDos; 
    localStorage.setItem('ToDos',JSON.stringify(listToDos));       
  }
  
  getlength(){
    return this.listToDos.length;      
  }
  
  addToDo(ToDo: ToDo){  
    this.listToDos.push(ToDo);
    localStorage.setItem('ToDos',JSON.stringify(this.listToDos));       
  }
  
  
  
  getToDos(){
    return JSON.parse(localStorage.getItem('ToDos'))
  }
  
  
  getToDosByUserId(userId: string){
    let listToDos:ToDo[] = JSON.parse(localStorage.getItem('ToDos'));
    listToDos=listToDos.filter(x=>x.userId.toString()===userId);  
    return listToDos;
  }

}

