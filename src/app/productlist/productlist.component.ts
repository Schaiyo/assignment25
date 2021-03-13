import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = [];
    this.products.push(
      {
        name: "ส้มโอ",
        price: 990
      }
    );
    this.products.push(
      {
        name: "แตงโม",
        price: 1000
      }
    );
    this.products.push(
      {
        name: "มะพร้าวหอม",
        price: 500
      }
    );
  }

  ngOnInit(): void {
  }

}
