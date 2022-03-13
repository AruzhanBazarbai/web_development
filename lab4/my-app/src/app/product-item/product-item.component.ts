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

  ngOnInit(): void {
  }
  addLike(product:Product){
    this.cartService.addLikeToItem(product);
  }

}
