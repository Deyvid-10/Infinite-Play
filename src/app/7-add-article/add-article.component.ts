import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { TypesToArticlesCart } from '../interfaces/types-to-articles-cart';

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
