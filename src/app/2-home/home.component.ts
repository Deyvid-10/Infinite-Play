import { Component, Renderer2, inject} from '@angular/core';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit(): void
  {
    // Coloca el título de la pestaña
    window.document.title = "Inicio - Infinite Play"
  }

  // Inyecta él los datos para los artículos y los asigna a una variable
  private data = inject(DataService)
  
  articlesOutstanding: TypesToArticles[] = this.data.articlesOutstanding
}
