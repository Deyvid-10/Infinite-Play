import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

// Tipado para los objetos de los acticulos
interface TypesToArticlesCart
{
  id: number
  title: string
  description:string
  price: number
  img: string
  quantity: number
}

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  //Inyecta los datos de los articulos
  private data = inject(DataService)
  publishedArticles: TypesToArticlesCart[] = this.data.articlesCart
}
