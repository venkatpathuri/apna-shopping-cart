import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorten-desc',
  templateUrl: './shorten-desc.component.html',
  styleUrls: ['./shorten-desc.component.css']
})
export class ShortenDescComponent implements OnInit {

  @Input()text:string='';
  @Input()word_length:number=0;
  showmore:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
