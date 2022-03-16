import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Album, Photo } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  createItem(post: Album): Observable<any> {
    return this.http.post(`${this.BASE_URL}`, post);
  }
  deleteItem(id:number):Observable<any>{
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
  updateItem(post: Album):Observable<Album>{
    return this.http.put<Album>(`${this.BASE_URL}${post.id}`,post);
  }
  getItems(): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.BASE_URL}`);
  }
  getItem(id:number):Observable<Album>{
    return this.http.get<Album>(`${this.BASE_URL}/${id}`);
  }
  getPhotos(id:number):Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.BASE_URL}/${id}/photos`);
  }
  
}
