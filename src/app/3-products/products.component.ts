import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

interface TypesToArticles
{
  id: number
  title: string
  description:string
  price: number
  img: string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {

  ngOnInit(): void
  {
    // Coloca el título de la pestaña
    window.document.title = "Productos - Infinite Play"
  }

  // Inyecta él los datos para los artículos y los asigna a una variable
  private data = inject(DataService)

  articlesProducts: TypesToArticles[] = this.data.articlesProducts
}
