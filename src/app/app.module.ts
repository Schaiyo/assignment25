import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './catalog/productlist/productlist.component';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductlistComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
