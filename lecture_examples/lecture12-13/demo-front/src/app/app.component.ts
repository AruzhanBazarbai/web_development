import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-front';

  logged = true;
  username='';
  password='';

  constructor(private ctgService: CategoryService){

  }
  ngOnInit(){
    const token=localStorage.getItem('token')
    if(token){
      this.logged=true; //если токен есть и активный то тру
    }
  }

  login(){ //когда юзер нажимает кнопку логин то вызыватся эта функция. она берет юзернейм и пароль и отправляем в сервис
    this.ctgService.login(this.username,this.password).subscribe((data)=>{ //эта функция сервиса вернет значение активного токена которого получили при входе
      localStorage.setItem('token',data.token); //его передаем в localStorage
      this.logged=true; //теперь юзер может увидеть данные с бекенда так как тру
      this.username=""; //и поля юзернейм и пароль в форме теперь пустые 
      this.password="";
    })
  }
  logout(){
    this.logged=false; //при выхода логгед=фолс и удаляем токена с localStorage
    localStorage.removeItem('token')
  }
}