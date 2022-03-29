import { Component, OnInit,Input} from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product | undefined;
  constructor(private cartService: CartService) { }
  ratingState : boolean=true;
  ratingActive: boolean=false;
  ngOnInit(): void {
  }
  addLike(product:Product){
    this.cartService.addLikeToItem(product);
  }
  changeStateOfRating(){
    this.ratingActive=true;
    this.ratingState=false;
  }
  addRatingOne(product: Product){
    this.ratingActive=false;
    product.rating=(product.rating+1)/2;

  }
  addRatingSecond(product: Product){
    this.ratingActive=false;
    product.rating=(product.rating+2)/2;
  }
  addRatingThree(product: Product){
    this.ratingActive=false;
    product.rating=(product.rating+3)/2;
  }
  addRatingFour(product: Product){
    this.ratingActive=false;
    product.rating=(product.rating+4)/2;
  }
  addRatingFive(product: Product){
    this.ratingActive=false;
    product.rating=(product.rating+5)/2;
  }

}
