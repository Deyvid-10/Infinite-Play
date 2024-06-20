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
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  //Inyecta los datos de los articulos
  private data = inject(DataService)
  publishedArticles: TypesToArticlesCart[] = this.data.articlesCart
}
