import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypesToArticlesCart } from '../interfaces/types-to-articles-cart';

@Injectable({
  providedIn: 'root'
})
export class ManageVariableService {

    // Actualiza los valores de variables en los componentes
    private sub_total = new BehaviorSubject<number>(0)
    private quantity = new BehaviorSubject<number>(0)
    private articlesCart = new BehaviorSubject<TypesToArticlesCart[]>([])
  
    updateSubTotal()
    {
      return this.sub_total.asObservable()
    }
  
    updateQuantity()
    {
      return this.quantity.asObservable()
    }
  
    updateArticlesCart()
    {
      return this.articlesCart.asObservable()
    }


    // Función para actualizar los datos del detalle de pago en el carrito
    updateDetail(articlesCart: any): void
    {
      let sub_total: number = 0
      let quantity: number = 0

      for(let article of articlesCart)
      {
        sub_total += article.price * article.quantity
        quantity += article.quantity
      }  

      this.sub_total.next(sub_total)
      this.quantity.next(quantity)
    }

    clearVariable(): void
    {
      this.sub_total.next(0)
      this.quantity.next(0)
      this.articlesCart.next([])
    }
}
