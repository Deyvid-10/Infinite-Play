import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {
  @Input() showMenu: boolean = false
  @Input() currentPage: string = ""
}
