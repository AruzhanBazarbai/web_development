import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items=this.cartService.getItems();
  //To gather the user's name and address, use this to set the checkoutForm property to a form model containing nameaddress and fields.
  checkOutForm=this.formBuilder.group({ 
    name:'',
    address: ''
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { }

  onSubmit():void{
    this.items=this.cartService.clearItems();
    console.warn('Your order has been submitted',this.checkOutForm.value);
    this.checkOutForm.reset();
  }
  deleteItem(index: number){
    this.cartService.deleteItem(index);
    this.items=this.cartService.getItems();
  }

  ngOnInit(): void {
  }


}
