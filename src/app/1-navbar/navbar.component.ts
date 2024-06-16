import { Component, inject } from '@angular/core';
  import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';
import { ManageVariableService } from '../manage-variable.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // Determina en qué ruta se encuentra la aplicación
  currentPage: string = ""

  constructor(private router: Router)
  {
    this.router.events.subscribe(event =>
      {
        if(event instanceof NavigationEnd)
        {
          this.currentPage = event.urlAfterRedirects
        }
      }
    )
  }

  // Inyecta los servicios de manejo de variable
  private manageVariable = inject (ManageVariableService)
  private data = inject (DataService)

  // actualiza la cantidad de articulos en el carrito
  quatityOnCart: number = 0

  ngOnInit()
  {
    this.manageVariable.updateQuantity().subscribe(value => {
      this.quatityOnCart  = value
    })

    this.manageVariable.updateDetail(this.data.updateArticlesCart())
  }

  // Función para el menú desplegable
  isMenu: boolean = true

  menu(): void
  {
    this.isMenu = !this.isMenu
  }
}
