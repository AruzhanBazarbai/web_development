import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-v10',
  templateUrl: './v10.component.html',
  styleUrls: ['./v10.component.css']
})
export class V10Component implements OnInit {
  vacancies: Vacancy[]=[];
  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.getV10();
  }
  getV10(){
    this.vacancyService.getV10().subscribe((data)=>{
      this.vacancies=data;
    })
  }

}
