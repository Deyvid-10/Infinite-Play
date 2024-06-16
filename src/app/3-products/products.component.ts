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

  // Arrays para los filtros
  filterBrand: string[] = ["PlayStation", "Nintendo", "Xbox", "Lenovo", "Logitech G", "NVIDIA", "MSI", "Otros"]
  filterConsole: string[] = ["PS5", "Xbox Series", "Nintendo Switch", "PS4", "Xbox One", "Wii U", "PS3", "Xbox 360", "Wii"]
  filterArticles: string[] = ["Consolas", "Videojuegos", "Mandos", "Monitores", "Sillas", "Mesas", "Bocinas"]

  ngOnInit(): void
  {
    // Coloca el título de la pestaña
    window.document.title = "Productos - Infinite Play"
  }

  // Controlar la visibilidad del menú de filtro
  showFilter: boolean = false
  isLoad: boolean = false

  filterMenu():void
  {
    this.showFilter = !this.showFilter
    !this.isLoad ? this.isLoad = true : null 
  }

  // Inyecta él los datos para los artículos y los asigna a una variable
  private data = inject(DataService)

  articlesProducts: TypesToArticles[] = this.data.articlesProducts
}
