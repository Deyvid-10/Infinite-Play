import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { TypesToArticlesCart } from '../interfaces/types-to-articles-cart';

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
