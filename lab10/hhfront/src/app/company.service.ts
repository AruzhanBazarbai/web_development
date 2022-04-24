import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken, Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL="http://127.0.0.1:8000/"
  constructor(private  http: HttpClient) { }

  getCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(`${this.BASE_URL}api/companies/`)
  }
  getCompany(pk:number):Observable<Company>{
    return this.http.get<Company>(`${this.BASE_URL}api/companies/${pk}`)
  }
  login(username:string,password:string):Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}api/login/`,{
      username:username,
      password:password
    })
  }
}

