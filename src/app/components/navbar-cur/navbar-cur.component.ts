import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-cur',
  standalone: true,
  imports: [
    RouterLink,RouterLinkActive
  ],
  templateUrl: './navbar-cur.component.html',
  styleUrl: './navbar-cur.component.css'
})
export class NavbarCurComponent {

}
