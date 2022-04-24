import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../models";
import {Location} from "@angular/common";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies:Company[]=[]
  constructor(private cmpService: CompanyService,
              private location: Location) { }

  ngOnInit(): void {
    this.getCompanies();
  }
  getCompanies(){
    this.cmpService.getCompanies().subscribe((data)=>{
      this.companies=data;
    })
  }
  goBack(){
    this.location.back();
  }
}
