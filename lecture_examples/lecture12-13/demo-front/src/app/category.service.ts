import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken, Category } from './models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL="http://127.0.0.1:8000"
  constructor(private http: HttpClient) { }
//берет юзернейм и пароль, отправляет в этот юрл и если правильно то получает токен и вернет
  login(username:string, password:string):Observable<AuthToken>{ 
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`,{
      username,
      password
    });
  }

  getCategories():Observable<Category[]>{ //берет из этого юрл данные и вернет
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`)
  }
}
