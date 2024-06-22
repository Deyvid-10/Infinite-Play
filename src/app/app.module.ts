import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './5-cart/cart.component';
import { HomeComponent } from './2-home/home.component';
import { ProductsComponent } from './3-products/products.component';
import { FooterComponent } from './10-footer/footer.component';
import { NavbarComponent } from './1-navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { AcountFormComponent } from './6-acount-form/acount-form.component';
import { AddArticleComponent } from './7-add-article/add-article.component';
import { ListArticleComponent } from './8-list-article/list-article.component';
import { PendingOrdersComponent } from './9-pending-orders/pending-orders.component';
import { ViewProductsComponent } from './4-view-products/view-products.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    NavbarComponent,
    ArticlesComponent,
    CarouselComponent,
    NavLinksComponent,
    AcountFormComponent,
    AddArticleComponent,
    ListArticleComponent,
    PendingOrdersComponent,
    ViewProductsComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
