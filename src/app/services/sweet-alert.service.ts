import { Injectable, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { DataService } from './data.service';
import { ManageVariableService } from './manage-variable.service';
import { TypesToArticlesCart } from '../interfaces/types-to-articles-cart';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  // Inyecta el servicio que guarda los datos 
  private data = inject (DataService)
  private manageVariavle  = inject (ManageVariableService)

  // Alertas generales tipo notificación
  messageAlert(title: string, icon:any): void
  {
    Swal.fire({

      toast: true,
      position: 'top-end',
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      showCloseButton: true,
      
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },

      customClass: {
        timerProgressBar: "bg-primary",
      },

      showClass: {
        popup: `
          animate__animated
          animate__fadeInRight
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutUp
          animate__faster
        `
      }
    })
    
  }

  // Alerta para confirmar si se va a eliminar un artículo del carrito
  confirmDeleteAlert(title:string, icon:any, article: TypesToArticlesCart, articlesCart: TypesToArticlesCart[]): void
  {
    Swal.fire({
      title: title,
      icon: icon,
      showCloseButton: true,
      showCancelButton:true,
      confirmButtonText: "Si", 
      cancelButtonText: "No",
      customClass:{
        title: "pt-0",
        confirmButton: "bg-primary"
      },

      showClass: {
        popup: `
          animate__animated
          animate__fadeIn
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOut
          animate__faster
        `
      }
      
    }).then((result)=>{
      if(result.isConfirmed)
      {
        // Elimina el artículo del carrito, actualiza los datos en pantalla y los datos en localstorage
        this.data.articlesCart.splice(articlesCart.indexOf(article), 1) 
        
        this.manageVariavle.updateDetail(this.data.articlesCart)
    
        localStorage.setItem("articlesCart", JSON.stringify(this.data.articlesCart))
        
        this.messageAlert("Articulo eliminado del carrito", "success")        
      }
    })
  }

  // Alerta para confirmar si se va a agregar un artículo al carrito
  confirmAddAlert(title:string, icon:any,  articlesCart: TypesToArticlesCart[]): void
  {
    Swal.fire({
      title: title,
      icon: icon,
      showCloseButton: true,
      showCancelButton:true,
      confirmButtonText: "Si", 
      cancelButtonText: "No",
      customClass:{
        title: "pt-0",
        confirmButton: "bg-primary"
      },

      showClass: {
        popup: `
          animate__animated
          animate__fadeIn
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOut
          animate__faster
        `
      }
      
    }).then((result)=>{
      if(result.isConfirmed)
      {
        // Actualiza el localstorage para que los artículos se agreguen al carrito
        localStorage.setItem("articlesCart", JSON.stringify(articlesCart))

        this.manageVariavle.updateDetail(this.data.articlesCart)
        
        this.messageAlert("Articulo agregado al carrito", "success")        
      }
    })
  }

  // Alerta para confirmar pago de un pedido
  confirmPayAlert(title:string, icon:any): void
  {
    Swal.fire({
      title: title,
      icon: icon,
      showCloseButton: true,
      showCancelButton:true,
      confirmButtonText: "Si", 
      cancelButtonText: "No",
      customClass:{
        title: "pt-0",
        confirmButton: "bg-primary"
      },

      showClass: {
        popup: `
          animate__animated
          animate__fadeIn
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOut
          animate__faster
        `
      }
      
    }).then((result)=>{
      if(result.isConfirmed)
      {
        // Vacía todos los datos del detalle del pedido, incluyendo los datos en pantalla 
        // y los datos del localstorage
      
        localStorage.setItem("articlesCart", JSON.stringify([]))

        this.manageVariavle.clearVariable()

        this.messageAlert("El pago ha sido procesado satisfactoriamente", "success")        
      }
    })
  }
}
