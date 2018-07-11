import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSeeds() {
    this.toggle = false;
  }
  onEquipment() {
    this.toggle = true;
  }
}
