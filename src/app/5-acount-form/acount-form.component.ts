import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-acount-form',
  templateUrl: './acount-form.component.html',
  styleUrl: './acount-form.component.css'
})
export class AcountFormComponent {
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
}
