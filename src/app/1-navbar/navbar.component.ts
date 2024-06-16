import { Component, inject } from '@angular/core';
  import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';
import { ManageVariableService } from '../manage-variable.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  // Inyecta los servicios de manejo de variable, la data de los articulo y el FormBuilder
  private manageVariable = inject (ManageVariableService)
  private data = inject (DataService)
  private fb = inject (FormBuilder)

  // Variable para la cantidad de articulos en el carrito
  quatityOnCart: number = 0

  // Creación del formulario
  searchForm: FormGroup = this.fb.group({})

  ngOnInit()
  {
    // actualiza la cantidad de articulos en el carrito
    this.manageVariable.updateQuantity().subscribe(value => {
      this.quatityOnCart  = value
    })

    this.manageVariable.updateDetail(this.data.updateArticlesCart())

    // Configura los parametros del formulario
    this.searchForm = this.fb.group({
      search: ["", Validators.required]
    })
  }

  // Obtiene el valor del formulaario
  getSearch(): void
  {
    console.log(this.searchForm.value);
    
  }

  // Función para el menú desplegable
  showMenu: boolean = true

  menu(): void
  {
    this.showMenu = !this.showMenu
  }

  // Función para visualizar el buscador
  showSearch: boolean = false

  search(): void
  {
    this.showSearch = !this.showSearch
  }
}
