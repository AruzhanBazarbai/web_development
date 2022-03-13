import { Component } from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent{
  products=products;
  ctg : Product[]=[];
  constructor(){
    this.ctg=[];
    for(let x of products){
      let res=this.ctg.find(element=>element.category===x.category);
      if(res===undefined) this.ctg.push(x);
      
    }
  }

}
