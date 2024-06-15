import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './4-cart/cart.component';
import { HomeComponent } from './2-home/home.component';
import { ProductsComponent } from './3-products/products.component';
import { FooterComponent } from './5-footer/footer.component';
import { NavbarComponent } from './1-navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    NavbarComponent,
    ArticlesComponent,
    CarouselComponent
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
