import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

  user: any;
  

  constructor() {

  }

  ngOnInit() {
    this.user = {
      "name": "",
      "password": "",
      "email": "",
      "gender":"",
      "about":"",
      "vehicle":"",
      "vehicle1":"",
      "educations":"",
      "address": {
        "street": "",
        "city": "",
        "pin": ""
      }
    }
  }

  submitMyForm(formData: any) {
    console.log(formData)
    console.log(formData.value)
  }
  resetMyForm(formData: any) {
    console.log(formData)
    console.log(formData.value)
  }

}
