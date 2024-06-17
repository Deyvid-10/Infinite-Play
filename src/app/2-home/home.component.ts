import { Component, inject} from '@angular/core';
import { DataService } from '../data.service';

// Tipado para el objeto de articulos
interface TypesToArticles
{
  id: number
  title: string
  description:string
  price: number
  img: string
}

// Tipado para los iconos de las plataformas
interface TypesToPlataform
{
  name: string,
  img: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Objeto que contiene las imágenes de la sección plataformas
  plataformInfo: TypesToPlataform[] = 
                        [{name: "Play Station", img: "./assets/img/ps.avif"},
                        {name: "Xbox", img: "./assets/img/xbox.avif"},
                        {name: "Nintendo", img: "./assets/img/nintendo.webp"},
                        {name: "PC", img: "./assets/img/pc.png"}] 

  ngOnInit(): void
  {
    // Coloca el título de la pestaña
    window.document.title = "Inicio - Infinite Play"
  }

  // Inyecta él los datos para los artículos y los asigna a una variable
  private data = inject(DataService)
  
  articlesOutstanding: TypesToArticles[] = this.data.articlesOutstanding
}
