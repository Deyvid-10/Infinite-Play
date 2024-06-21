import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { TypesToArticlesCart } from '../interfaces/types-to-articles-cart';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrl: './pending-orders.component.css'
})
export class PendingOrdersComponent {
  //Inyectar los datos para la presentación de los artículos pendientes
  private data = inject(DataService)
  perdingArticles: TypesToArticlesCart[] = this.data.articlesCart

  ngOnInit(): void
  {
    // Coloca el título de la pestaña
    window.document.title = "Pedidos pendientes - Infinite Play"
  }

}
