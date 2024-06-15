import { Component,  Input,  inject } from '@angular/core';
import { SweetAlertService } from '../sweet-alert.service';
import { DataService } from '../data.service';

// Creando la interface para definir el tipo de datos que tendrán los objetos del artículo general
interface TypesToArticles
{
  id: number
  title: string
  description:string
  price: number
  img: string
}

// Creando la interface para definir el tipo de datos que tendrán los objetos del artículo 
//para el carrito
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
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})

export class ArticlesComponent {
  // Obtiene los datos del artículos que se pasaron a través del componente
  @Input() articles: TypesToArticles[] = []

  // Inyectando el servicio donde están guardados los datos para los artículos del carrito y 
  // el servicio para los sweetAlert
  private alert = inject (SweetAlertService)
  private data = inject(DataService)

  // Crea una variable donde se van a guardar los datos del carrito y la actualiza con los datos 
  // guardados en el localStorage
  articlesCart: TypesToArticlesCart[] = []

  // Función para agregar los artículos al carrito
  buttonAddToCart(article: any, quantity: number): void
  {
    this.articlesCart  = this.data.updateArticlesCart()

    article.quantity = quantity    

    let articleInCart: boolean = false
    for(let articleCart of this.articlesCart)
    {
      if(articleCart.id == article.id)
      {
        articleInCart = true
        articleCart.quantity += quantity
        break
      } 
    } 
    
    !articleInCart ? this.articlesCart.push(article) : null
    
    this.alert.confirmAddAlert("Quieres agregar este artículo al carrito?", "question", this.articlesCart)

  }
}
