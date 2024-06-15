import { Component, inject } from '@angular/core';
import { SweetAlertService } from '../sweet-alert.service';
import { DataService } from '../data.service';
import { ManageVariableService } from '../manage-variable.service';


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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {

  // Inyectando el servicio donde están guardados los datos para los artículos del carrito y 
  // el servicio para los sweetAlert
  private alert = inject (SweetAlertService)
  private data = inject (DataService)
  private manageVariavle  = inject (ManageVariableService)

  // Declarando variables para el detalle de pago y los datos de los artículos en el carrito  
  sub_total: number = 0
  quantity: number = 0
  articlesCart: TypesToArticlesCart[] = []

  ngOnInit(): void
  {
    // Coloca el título de la pestaña
    window.document.title = "Carrito - Infinite Play"

    // Actualiza los datos en pantalla
    this.updateData()
  }

  // Función que actualiza los datos en pantalla
  updateData(): void
  {
    this.manageVariavle.updateQuantity().subscribe(value => {
      this.quantity  = value
    })

    this.manageVariavle.updateSubTotal().subscribe(value => {
      this.sub_total  = value
    })
    this.manageVariavle.updateArticlesCart().subscribe(value => {
      this.articlesCart  = value
    })

    this.articlesCart = this.data.updateArticlesCart()

    this.manageVariavle.updateDetail(this.articlesCart)
  }

  // Función para ejecutar el pago
  toPay(): void
  {   
    this.alert.confirmPayAlert("Quieres prodeder al pago?", "question")    
  }

  // Función para eliminar los artículos del carrito
  buttonDeleteFromCart(article: TypesToArticlesCart): void
  {
    this.alert.confirmDeleteAlert("Quieres eliminar este artículo del carrito?", "warning", article, this.articlesCart)
  }

  // Función para manipular la cantidad de artículos
  quantityFromCart(event: Event, article: TypesToArticlesCart): void
  {
    let target = event.target as HTMLSelectElement

    article.quantity = Number(target.value)

    localStorage.setItem("articlesCart", JSON.stringify(this.articlesCart))
    this.updateData() 
  }
}
