import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Product } from '../../models/product';
import { ProductitemComponent } from '../productitem/productitem.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @ViewChildren(ProductitemComponent)
  productItems: QueryList<ProductitemComponent>;

  products: Product[];

  constructor(private backendService: BackendService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.backendService.getProducts();
  }

  selectedProduct(productComponent: ProductitemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

}
