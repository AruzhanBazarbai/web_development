import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";
import { V10Component } from './v10/v10.component';
import {VacanciesComponent} from "./vacancies/vacancies.component";

const routes: Routes = [
  {path:'companies',component:CompaniesComponent},
  {path:'companies/:id/vacancies',component:VacanciesComponent},
  {path:'vacancies/top_ten',component: V10Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
