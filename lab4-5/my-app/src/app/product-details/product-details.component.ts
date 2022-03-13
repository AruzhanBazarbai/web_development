import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,products } from '../products';
import { CartService } from '../cart.service'; //import this service

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route : ActivatedRoute,
    private cartService : CartService //inject this service
  ) { }

  addToCart(product : Product){ // takes the current product as argument
    this.cartService.addtoCart(product); //give this product to addToCart function as an argument to pusg the product to cart(items[])
    window.alert('Your product has been added to the cart!'); //Displays a message that you've added a product to the cart.
  }

  ngOnInit(): void {
    const routeParams=this.route.snapshot.paramMap; //берем активный route
    const productIdFromRoute=Number(routeParams.get('productId')); //take id from route
    this.product=products.find(product => product.id===productIdFromRoute); //take product that have id that is  same with productIdFromRoute
  }
  addLike(product:Product){
    this.cartService.addLikeToItem(product);
  }

}
