import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL="http://127.0.0.1:8000/"
  constructor(private  http: HttpClient) { }

  getVacancies():Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}api/vacancies/`);
  }
  getVacancy(pk:number):Observable<Vacancy>{
    return this.http.get<Vacancy>(`${this.BASE_URL}api/vacancies/${pk}`);
  }
  getCompanyVacancies(id:number):Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}api/companies/${id}/vacancies/`);
  }
  getV10():Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}api/vacancies/top_ten/`);
  }
}
