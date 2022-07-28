import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  senditemtocart = new Subject;
  changeCart = new Subject<any>();
  updatecart = new Subject<any>();
  searchItem=new Subject<any>();
  loaditems=new Subject<any>();
 

  index: any = 0;
  cart: any = [];
  object_found: boolean = false
  constructor(private http: HttpClient,private toastr: ToastrService) {

    this.getItems();
  }


  getItems() {

    return this.http.get("https://fakestoreapi.com/products/")


  }


  sendCartItem() {

    this.cart = JSON.parse(localStorage.getItem('items') || '[]')

    return this.cart.slice();
  }



  getCartItems(data: any) {

    if (Array.isArray(this.cart) && this.cart.length > 0) {
      for (let i = 0; i < this.cart.length; i++) {

        if (this.cart[i].id == data.id) {
          this.index = this.cart[i]
          this.object_found = true;
        }
      }
      if (this.object_found) {


        this.index.quantity++

        localStorage.setItem("items", JSON.stringify(this.cart));
      }
      else {
        this.cart.push(data);



        for (let i = 0; i < this.cart.length; i++) {

          this.cart[i]["quantity"] = 1;
        }
        localStorage.setItem("items", JSON.stringify(this.cart));
        alert("Item added to cart successfully")
      }

    } else {

      this.cart.push(data);



      for (let i = 0; i < this.cart.length; i++) {

        this.cart[i]["quantity"] = 1;
      }
      localStorage.setItem("items", JSON.stringify(this.cart));
      alert("Item added to cart successfully")
    }



  }



  deleteItem(index: number, id: any) {
    this.cart.splice(index, 1);


    localStorage.setItem("items", JSON.stringify(this.cart));

    this.updatecart.next(this.cart);
    this.changeCart.next(this.cart.slice())


  }

  emptyCartItems() {
   
      this.cart=[];
    

    localStorage.setItem("items", JSON.stringify(this.cart));

    this.updatecart.next(this.cart);
    this.changeCart.next(this.cart.slice())

  }


  decQuant(cart: any, index: any, id: any) {

    this.cart[index]["quantity"]--
    localStorage.setItem("items", JSON.stringify(this.cart));
    this.updatecart.next(this.cart);
    this.changeCart.next(this.cart.slice())
  }



  incQuant(cart: any, index: any, id: any) {
    this.cart[index]["quantity"]++;

    localStorage.setItem("items", JSON.stringify(this.cart));

    this.updatecart.next(this.cart);
    this.changeCart.next(this.cart.slice())
  }

}
