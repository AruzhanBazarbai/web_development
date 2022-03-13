import { Component,Output, OnInit } from '@angular/core';

import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products=products;
  ctg : Product | undefined;
  constructor(private route: ActivatedRoute){ }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit(): void {
    const routeParams=this.route.snapshot.paramMap; //берем активный route
    const productIdFromRoute=String(routeParams.get('productCategory')); //take id from route
    this.ctg=products.find(product => product.category===productIdFromRoute); //take product that have id that is  same with productIdFromRoute
  }

}
