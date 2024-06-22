import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CenterComponent } from './components/center/center.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MobileCardComponent } from './components/mobile-card/mobile-card.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,
    CenterComponent,
    FooterComponent,
    NavbarComponent,
    CategoriesComponent
    , CarouselComponent,
    MobileCardComponent   
       
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFirstProject';
}
