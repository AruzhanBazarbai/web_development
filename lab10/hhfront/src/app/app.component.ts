import {Component, OnInit} from '@angular/core';
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'hhfront';
  logged=false;
  username='';
  password='';

  constructor(private  cmpService: CompanyService) {
  }
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  login() {
    this.cmpService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }
  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }

}
