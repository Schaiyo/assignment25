import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: 'assignment20';
  
  @ViewChild('productList', { static: true})
  productList: ProductlistComponent;

  ngOnInit(): void {
    this.productList.products = [
      {
        name: 'ส้มโอ',
        price: 111
      },
      {
        name: 'แตงโอ',
        price: 222
      },
      {
        name: 'มะพร้าวน้ำหอม',
        price: 333
      }
    ];
  }
}
