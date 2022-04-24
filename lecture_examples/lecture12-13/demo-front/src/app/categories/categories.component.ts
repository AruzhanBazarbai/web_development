import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[]=[];
  constructor(private ctgService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.ctgService.getCategories().subscribe((data)=>{
      this.categories=data; //получаем данные с помощью сервиса с бекенда
    });
  }

}
