import { Component, OnInit } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-dashboard',
  templateUrl: './items-dashboard.component.html',
  styleUrls: ['./items-dashboard.component.css']
})
export class ItemsDashboardComponent implements OnInit {

  All_items: any[] = []
  search_item: any = ''
  category: any = ''
  constructor(private itemservice: ItemsService) {

    this.getItemsFormService();

    this.itemservice.searchItem.pipe(
      debounceTime(500)).
      subscribe((res: any) => {

        this.search_item = res;
        this.searchItems();

      });

    this.itemservice.loaditems.subscribe((res: any) => {
      this.category = res;


      switch (this.category) {

        case "men's clothing":
          this.loadFashionItems();
          break;
        case "all products":
          this.getItemsFormService();
          break

        case "electronics":
          this.loadElectronics();
          break;

        case "jewelery":
          this.loadJewelery();
          break;

      }



    });


  }

  ngOnInit(): void { }

  getItemsFormService() {

    this.itemservice.getItems().pipe(map((res: any) => {
      return res
    })).subscribe((res: any) => {
      this.All_items = res
    });

  }



  searchItems() {

    if (this.search_item) {
      this.All_items = this.All_items.filter((v: any, i: any) => {
        return v.title.toLocaleLowerCase().match(this.search_item.toLocaleLowerCase())
      });
    }
    else {
      this.getItemsFormService();
    }
  }


  loadFashionItems() {

    this.All_items = this.All_items.filter((v: any, i: any) => {
      return v.category.toLocaleLowerCase() == this.category.toLocaleLowerCase()
    });
  }

  loadElectronics() {
    this.All_items = this.All_items.filter((v: any, i: any) => {
      return v.category.toLocaleLowerCase() == this.category.toLocaleLowerCase()
    });
  }

  loadJewelery() {
    this.All_items = this.All_items.filter((v: any, i: any) => {
      return v.category.toLocaleLowerCase() == this.category.toLocaleLowerCase()
    });
  }

  addItemToCart(item: any) {


    this.itemservice.senditemtocart.next(item);
  }



}
