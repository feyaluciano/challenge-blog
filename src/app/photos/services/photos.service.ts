import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/Post';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from 'src/app/core/interfaces/Photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  api_url: String = environment.apiEndPoint;
  constructor(private _http: HttpClient) {}

  getList(): Observable<Photo[]> {
    return this._http.get<Photo[]>(`${this.api_url}/photos`, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  }

  getPhotosByIdAlbum(id: number): Observable<Photo[]> {
    return this._http.get<Photo[]>(`${this.api_url}/album/${id}/photos`, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  }
}
