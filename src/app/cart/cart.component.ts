import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  price: any = 0;
  quantity: any = 0;
  cart_array: any[] = []
  getprice: any = 0;
  constructor(private itemservice: ItemsService,private router:Router) {

    this.itemservice.changeCart.subscribe((res: any) => {
      this.cart_array = res;


      this.priceCalc();

    });

  }
  priceCalc() {
    this.price = 0
    for (let i = 0; i < this.cart_array.length; i++) {
      this.getprice = this.cart_array[i].price

      this.quantity = this.cart_array[i].quantity;

      for (let i = 1; i <= this.quantity; i++) {
        this.price += this.getprice

      }

    }
  }

  ngOnInit(): void {



    this.cart_array = this.itemservice.sendCartItem();
    this.priceCalc();

  }
  decreaseQuant(cart: any, index: any, id: any) {
    if (cart == 1) {
      this.itemservice.deleteItem(index, id);


    }
    else {

      this.itemservice.decQuant(cart, index, id)

    }
  }

  increaseQuant(cart: any, index: any, id: any) {
    this.itemservice.incQuant(cart, index, id)

  }

  emptyCart(){
    this.itemservice.emptyCartItems()
  }
  addMoreItems(){
    this.router.navigate(['/items'])
  }

}
