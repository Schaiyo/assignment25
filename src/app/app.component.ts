import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductlistComponent } from './catalog/productlist/productlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private backendService: BackendService) {}
  
  @ViewChild('productList', { static: true})
  productList: ProductlistComponent;

  ngOnInit(): void {
    this.productList.products = this.backendService.getProducts();
  }
}
