import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies:Vacancy[]=[];
  constructor(private location: Location,
              private route: ActivatedRoute,
              private vcService: VacancyService) { }

  ngOnInit(): void {
    this.getVacancies();
  }
  goBack(){
    this.location.back();
  }
  getVacancies(){
    this.route.paramMap.subscribe(params=>{
      const id=+(params.get('id')||{});
        this.vcService.getCompanyVacancies(id).subscribe((data)=>{
          this.vacancies=data;
        })
    })
  }
}
