import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { TypesToArticles } from '../interfaces/type-to-articles';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  // Mostrar articulo segun el id seleccionado
  articleItemId: string | null = null
  articleItem: TypesToArticles | null = null

  private route = inject(ActivatedRoute)
  private data = inject(DataService)

  

  ngOnInit()
  {
    this.articleItemId = this.route.snapshot.paramMap.get('id')
    this.articleItem = this.data.articlesProducts[Number(this.articleItemId) - 1]
  }
}
