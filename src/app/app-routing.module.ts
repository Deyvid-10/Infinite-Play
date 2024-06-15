import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './2-home/home.component';
import { ProductsComponent } from './3-products/products.component';
import { CartComponent } from './4-cart/cart.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'productos', component: ProductsComponent},
  { path: 'carrito', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }