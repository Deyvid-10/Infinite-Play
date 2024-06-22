import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { TypesToArticles } from '../interfaces/type-to-articles';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css'
})
export class SuggestionsComponent {
  private data = inject (DataService)
  articles: TypesToArticles[] = this.data.articlesProducts
}
