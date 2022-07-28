import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItemsService } from '../items.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: number = 0;
  check_cart: any;
  sum:any=0  ;
  itemname:any;
  show:boolean=false;

  constructor(private itemservice: ItemsService, private router: Router,private toastr: ToastrService) {


    this.itemservice.senditemtocart.pipe(map((res: any) => {
      return res;
    })).subscribe((res: any) => {

      if (res) {

        this.cart = this.cart + 1;
       
      }
      this.sendCartItems(res);

    });
  }

  ngOnInit(): void {



    this.itemservice.updatecart.subscribe((res: any) => {
       
      this.check_cart = res.map((res: any) => {

        return res.quantity

      });
      this.sum=0;
      for (let i = 0; i < this.check_cart.length; i++) {


        this.sum += this.check_cart[i]
      }
      this.cart = this.sum

    });

    this.check_cart= JSON.parse(localStorage.getItem('items') || '[]');
    for (let i = 0; i < this.check_cart.length; i++) {


      this.sum += this.check_cart[i].quantity
    }
    this.cart = this.sum

  }

  sendCartItems(data: any) {
    this.itemservice.getCartItems(data);
  }

  SearchItems(event:any){

    this.itemservice.searchItem.next(event.target.value);

  }



}
