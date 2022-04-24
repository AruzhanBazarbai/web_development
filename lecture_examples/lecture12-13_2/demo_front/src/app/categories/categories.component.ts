import { Component, OnInit } from '@angular/core';
import {Category} from "../models";
import {CategoryService} from "../category.service";

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
  getCategories() {
    this.ctgService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

}
