import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, ɵInternalFormsSharedModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-my-model',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor],
  templateUrl: './my-model.component.html',
  styleUrl: './my-model.component.css'
})
export class MyModelComponent {

}
