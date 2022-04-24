import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category,AuthToken} from "./models";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL="http://127.0.0.1:8000/"
  constructor(private http: HttpClient) { }

  getCategories():Observable<Category[]>{
      return this.http.get<Category[]>(`${this.BASE_URL}api/categories/`);
  }
  login(username:string,password:string):Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}api/login/`,{
      username:username,
      password:password
    })
  }
}
