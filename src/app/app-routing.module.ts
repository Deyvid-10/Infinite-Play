import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './2-home/home.component';
import { ProductsComponent } from './3-products/products.component';
import { CartComponent } from './5-cart/cart.component';
import { AcountFormComponent } from './6-acount-form/acount-form.component';
import { AddArticleComponent } from './7-add-article/add-article.component';
import { ListArticleComponent } from './8-list-article/list-article.component';
import { PendingOrdersComponent } from './9-pending-orders/pending-orders.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'productos', component: ProductsComponent},
  { path: 'carrito', component: CartComponent},
  { path: 'login', component: AcountFormComponent},
  { path: 'signup', component: AcountFormComponent},
  { path: 'config-acount', component: AcountFormComponent},
  { path: 'agregar-articulos', component: AddArticleComponent},
  { path: 'articulos-publicados', component: ListArticleComponent},
  { path: 'articulos-pendientes', component: PendingOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }