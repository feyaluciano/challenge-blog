import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Albumn } from 'src/app/core/interfaces/Albumn';

@Injectable({
  providedIn: 'root'
})
export class StorageAlbumnsService {


  private listAlbumns:Albumn[]=[];
  public storageAlbumns$: Subject<Albumn[]>;
  
  constructor() {  
    this.storageAlbumns$ = new Subject();
  }
  
  
  public getHandlerAlbumns$(): Observable<Albumn[]> {
    return this.storageAlbumns$.asObservable(); 
  }
  
  setListAlbumn(listAlbumns: Albumn[]){   
    this.listAlbumns=listAlbumns; 
    localStorage.setItem('Albumns',JSON.stringify(listAlbumns));       
  }
  
  getlength(){
    return this.listAlbumns.length;      
  }
  
  addAlbumn(Albumn: Albumn){  
    this.listAlbumns.push(Albumn);
    localStorage.setItem('Albumns',JSON.stringify(this.listAlbumns));       
  }
  
  
  
  getAlbumns(){
    return JSON.parse(localStorage.getItem('Albumns'))
  }
  
  
  getAlbumnsByUserId(userId: string){
    let listAlbumns:Albumn[] = JSON.parse(localStorage.getItem('Albumns'));
    listAlbumns=listAlbumns.filter(x=>x.userId.toString()===userId);  
    return listAlbumns;
  }

}
