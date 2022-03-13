import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] =[];
  constructor(private http: HttpClient) { }
  addtoCart(product: Product ){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearItems(){
    this.items=[];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get<{type:string, price:number}[]>('./assets/shipping.json');
  }
  deleteItem(index:number){
    console.log(this.items[index].name);
    this.items.splice(index,1);
    
  }
  addLikeToItem(product:Product){
    product.like++;
  }
}
