import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Photo } from 'src/app/core/interfaces/Photo';
import { PhotosService } from '../services/Photos.service';

@Injectable({
  providedIn: 'root',
})
export class StoragePhotosService {
  private listPhotos: Photo[] = [];
  public storagePhotos$: Subject<Photo[]>;

  constructor() {
    this.storagePhotos$ = new BehaviorSubject(this.listPhotos);
  }

  public getHandlerPhotos$(): Observable<Photo[]> {
    return this.storagePhotos$.asObservable();
  }

  setListPhoto(listPhotos: Photo[]) {
    this.listPhotos = listPhotos;
    localStorage.setItem('photos', JSON.stringify(listPhotos));
  }

  getlength() {
    return this.listPhotos.length;
  }

  updatePhoto(Photo: Photo) {
    this.deletePhotoById(Photo.id.toString());
    this.addPhoto(Photo);
  }

  addPhoto(Photo: Photo) {
    this.listPhotos = this.getPhotos();
    this.listPhotos.push(Photo);
    localStorage.setItem('photos', JSON.stringify(this.listPhotos));
  }
  deletePhotoById(id: string) {
    let list = this.getPhotos();
    let index;
    let p = 0;
    let ok = true;
    while (p < list.length && ok) {
      if (list[p].id == id) {
        index = p;
        ok = false;
      }
      p++;
    }
    list.splice(index, 1);
    this.setListPhoto(list);
  }

  getPhotos() {
    return JSON.parse(localStorage.getItem('photos'));
  }

  getPhotosById(id: string): Photo {
    let listPhotos: Photo[] = JSON.parse(localStorage.getItem('photos'));
    listPhotos = listPhotos.filter((x) => x.id.toString() === id);
    return listPhotos[0];
  }

  getPhotosByAlbumId(albumId: string) {
    let listPhotos: Photo[] = JSON.parse(localStorage.getItem('photos'));
    listPhotos = listPhotos.filter((x) => x.albumId.toString() === albumId);
    return listPhotos;
  }

  getPhotosByTitle(title: string) {
    let listPhotos: Photo[] = JSON.parse(localStorage.getItem('photos'));
    listPhotos = listPhotos.filter((x) => x.title.toString().includes(title));
    return listPhotos;
  }
}
