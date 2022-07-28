import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-navigation',
  templateUrl: './items-navigation.component.html',
  styleUrls: ['./items-navigation.component.css']
})
export class ItemsNavigationComponent implements OnInit {


  constructor(private router: Router,private itemservice:ItemsService) { }

  ngOnInit(): void {
  }

  loadItems() {
    this.router.navigate(['/items']);
    this.itemservice.loaditems.next("all products")
  }


  loadfashionItems(){
    this.itemservice.loaditems.next("men's clothing")

  }
  loadElectronics(){
    this.itemservice.loaditems.next("electronics")
  }

  loadJewelery(){
    this.itemservice.loaditems.next("jewelery")
  }
}
