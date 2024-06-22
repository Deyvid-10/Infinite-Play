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
  
  articleItemId: string | null = null
  articleItem: TypesToArticles | null = null
  quantity: number = 1

  private route = inject(ActivatedRoute)
  private data = inject(DataService)

  ngOnInit(): void
  {
    // Mostrar articulo segun el id seleccionado
    this.articleItemId = this.route.snapshot.paramMap.get('id')
    this.articleItem = this.data.articlesProducts[Number(this.articleItemId) - 1]
  }



  // Obtener la cantidad de articulos para el pedido
  getQuantity(event: Event): void
  {
    let target = event.target as HTMLSelectElement
    this.quantity = Number(target.value)
  }
}
