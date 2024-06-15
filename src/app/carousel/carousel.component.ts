import { Component, Renderer2, inject } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {

  // Inyecta el servicio Renderer2 para manejar los estilos desde typescript
  private style = inject(Renderer2)

  // Array que guarda todas las imágenes del carrusel
  imgs: string[] = ["./assets/img/consolas.jpg", 
                    "./assets/img/juegos.jpg", 
                    "./assets/img/x-box.jpg",
                    "./assets/img/mandos.jpeg"]

  // Controlar el movimiento de las imágenes en el carrusel
  position:number = 0
  seconds: number = 0

  ngOnInit(): void
  {    
    // Al iniciar la aplicación se inicia un setInterval que se ejecuta cada segundo para llevar un 
    // conteo de segundos transcurrido y cada 5 segundos va a a cambiar a la imagen siguiente
    
    setInterval(()=>{
      this.seconds ++   
      if(this.seconds == 10)
      {
        this.transition(1, 0)
        this.seconds = 0
      }

    }, 1000) 
  }

  // Función para especificar si el movimiento es a la derecha, izquierda o una posición 
  // especificada por los botones

  transition(orientation: number, specifyOrientation: number): void
  {
    let carousel = document.getElementById('carousel')

    specifyOrientation === 1 ? null : orientation ===  0 ? this.position = this.position - 1 : this.position = this.position + 1 

    this.position < 0 ? this.position = this.imgs.length - 1 : null
    this.position > this.imgs.length - 1 ? this.position = 0 : null    

    this.style.setStyle(carousel, "left", `-${this.position * 100}%`)
    this.style.setStyle(carousel, "transition", "left 1.5s ease")
    
    document.querySelectorAll(".customButtonSlide")
    .forEach(button => {this.style.setStyle(button, "background-color", "rgba(240, 248, 255, 0.856)") }) 

    let botonStyleRed = document.querySelector(`.buttonSlide${this.position}`)
    this.style.setStyle(botonStyleRed, "background-color", "#dc3545")

    this.seconds = 0
  }

  // Función que dice cuál será la posición según el botón presionado y que ejecuta 
  // la función para el movimiento del carrusel

  buttonAction(buttonNumber: number): void
  {    
    this.position = buttonNumber
    this.transition(0, 1)
  }
}
