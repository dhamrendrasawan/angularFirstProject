import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  isDirty: boolean = true;
  constructor(private router: Router) {
  }

  goToHomePage()
  {
    
  }
}
