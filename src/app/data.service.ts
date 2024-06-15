import { Injectable} from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // Data para los artículos destacados
  articlesOutstanding: TypesToArticles[] = [
    {id:1,
    title: "Nintendo Switch con Joy-Con azul neón y rojo neón", 
    description: "¡Lleva tu experiencia de juego a un nuevo nivel con el Nintendo Switch! Diseñada para la flexibilidad y el disfrute, esta consola híbrida te permite jugar en casa o en movimiento sin perder ni un momento de diversión.",
    price: 15500,
    img: "./assets/img/switch.jpg"},
      
    {id:5,
    title: "Control de Xbox - Series X, Series S, One", 
    description: "Disfruta de una experiencia de juego mejorada y cómoda con el Mando Inalámbrico Xbox diseñado específicamente para las consolas Xbox Series X y Xbox Series S. Con su diseño elegante y ergonómico, este mando es el compañero perfecto para cualquier jugador que busque precisión y comodidad en sus partidas.",
    price: 3200,
    img: "./assets/img/xboxcontroller.jpg"},

    {id:11,
    title: "NBA 2K24 - Kobe Bryant Edition", 
    description: "Repleto de pura y auténtica acción de baloncesto, NBA 2K24 cuenta con una variedad de modos de juego para un jugador y multijugador en los que podrás sumergirte.",
    price: 2600,
    img: "./assets/img/nba-2k24.webp"}]


  // Data para los artículos generales
  articlesProducts: TypesToArticles[] = [
    {id:1,
    title: "Nintendo Switch con Joy-Con azul neón y rojo neón", 
    description: "¡Lleva tu experiencia de juego a un nuevo nivel con el Nintendo Switch! Diseñada para la flexibilidad y el disfrute, esta consola híbrida te permite jugar en casa o en movimiento sin perder ni un momento de diversión.",
    price: 15500,
    img: "./assets/img/switch.jpg"},
        
    {id:2,
    title: "Super Smash Bros. Ultimate", 
    description: "Sumérgete en el emocionante mundo de Super Smash Bros. Ultimate, el juego de lucha definitivo que reúne a tus personajes favoritos en intensas batallas. Exclusivo para Nintendo Switch, este título ofrece una experiencia de juego sin precedentes con una amplia variedad de luchadores, escenarios y modos de juego.",
    price: 2200,
    img: "./assets/img/ssbu.jpg"},
    
    {id:3,
    title: "DOOM Eternal - PS4", 
    description: "Prepárate para una acción sin tregua con Doom Eternal, el aclamado shooter en primera persona que lleva el combate infernal a nuevos niveles. Desarrollado por id Software, este juego continúa la legendaria saga de Doom, brindándote un arsenal impresionante, enemigos despiadados y una jugabilidad trepidante que te mantendrá al borde de tu asiento.",
    price: 1800,
    img: "./assets/img/doom eternal.jpg"},

    {id:4,
    title: "PS4 Slim 1TB - God of War Ragnarok Bundle", 
    description: "Consola PlayStation 4 Slim 1 TB, incluye:-God of War: Ragnarok.-Control PS4.-Cable de energia.-Cable de sincronizacion y carga de control.-Cable HDMI.",
    price: 16000,
    img: "./assets/img/ps4-slim.webp"},
          
    {id:5,
    title: "Control de Xbox - Series X, Series S, One", 
    description: "Disfruta de una experiencia de juego mejorada y cómoda con el Mando Inalámbrico Xbox diseñado específicamente para las consolas Xbox Series X y Xbox Series S. Con su diseño elegante y ergonómico, este mando es el compañero perfecto para cualquier jugador que busque precisión y comodidad en sus partidas.",
    price: 3200,
    img: "./assets/img/xboxcontroller.jpg"},
      
    {id:6,
    title: "Monitor de 27 pulgadas", 
    description: "Descubre una nueva dimensión en la calidad visual con nuestro Monitor de 27 Pulgadas. Diseñado para ofrecer imágenes nítidas y vibrantes, este monitor es ideal para profesionales, gamers y entusiastas del entretenimiento que buscan una experiencia de visualización superior.",
    price: 6500,
    img: "./assets/img/monitor.jpg"},

    {id:7,
    title: "Elden Ring - PS4", 
    description: "Descubre un viaje épico y lleno de misterio con Elden Ring. Desarrollado por FromSoftware y colaborado con George R.R. Martin, este juego promete llevar a los jugadores a un vasto mundo abierto lleno de desafíos y secretos por descubrir.",
    price: 18000,
    img: "./assets/img/eldenring.jpg"},
             
    {id:8,
    title: "Xbox Series S", 
    description: "¡Descubre el poder de la nueva generación con Xbox Series S! Sumérgete en juegos impresionantes con gráficos de alta fidelidad y carga rápida. Disfruta de una experiencia de juego fluida y sin interrupciones gracias a su rendimiento avanzado. Con un diseño compacto y acceso a una biblioteca de juegos increíblemente diversa, Xbox Series S te ofrece horas de entretenimiento sin igual. ¡Explora nuevos mundos y desafíos con la consola más accesible de Xbox!",
    price: 17600,
    img: "./assets/img/x-box s.jpg"},
        
    {id:9,
    title: "Silla Gaming Homall S", 
    description: "Eleva tu experiencia de juego con la Silla Gaming Homall S, diseñada para ofrecer la máxima comodidad y soporte durante largas sesiones. Perfecta para jugadores, streamers y trabajadores de oficina, esta silla combina ergonomía y estilo en un solo producto.",
    price: 13999,
    img: "./assets/img/silla.png"},
            
    {id:10,
    title: "Grand Theft Auto V - Xbox Series X", 
    description: "Adéntrate en Los Santos, una metrópolis vibrante llena de oportunidades y peligros. En GTA V, podrás vivir la vida de tres criminales muy diferentes: Michael, Franklin y Trevor. Desde emocionantes atracos hasta misiones repletas de acción y un vasto mundo abierto por explorar, cada decisión que tomes afectará el curso de la historia. Sumérgete en un universo dinámico donde la libertad y el caos se entrelazan, y prepárate para una experiencia de juego que desafía todos los límites. GTA V redefine lo que significa ser un héroe en la ciudad de Los Santos.",
    price: 11000,
    img: "./assets/img/gta 5.jpg"},
          
    {id:11,
    title: "NBA 2K24 - Kobe Bryant Edition", 
    description: "Repleto de pura y auténtica acción de baloncesto, NBA 2K24 cuenta con una variedad de modos de juego para un jugador y multijugador en los que podrás sumergirte.",
    price: 2600,
    img: "./assets/img/nba-2k24.webp"},
          
    {id:12,
    title: "PC Gamer - ViprTech Rebel ", 
    description: "CUAL ES EL CAMPO PARA MOSTRAR QUE UN REGISTRO ESTA HABILITADO O DESHABILITADO",
    price: 48708,
    img: "./assets/img/pc gamer.jpg"}]
  
  
  // Data que se alimenta del localstorage  para los artículos en el carrito
  articlesCart: TypesToArticlesCart[] = [] 

  updateArticlesCart(): TypesToArticlesCart[]
  {
    let getArticlesCart = localStorage.getItem("articlesCart")

    if(getArticlesCart)
    {
      this.articlesCart = JSON.parse(getArticlesCart)      
    }

    return this.articlesCart
  }
}



