import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductitemComponent } from './productitem/productitem.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BackendService } from '../backend.service';


@NgModule({
  declarations: [
    ProductitemComponent,
    ProductlistComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [BackendService],
  exports: [
    ProductlistComponent
  ]
})
export class CatalogModule { }
