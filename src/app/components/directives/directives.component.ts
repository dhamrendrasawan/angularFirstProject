import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NumberOnlyDirective } from '../../directives/number-only.directive';
import { HightlightDirective } from '../../directives/hightlight.directive';


@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule,NumberOnlyDirective,HightlightDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  n = 5;
  cars = ['Tata', 'Honda', 'Maruti', 'HUndai', 'Mahindra'];
  flag: boolean = true;

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];
  employeeColumns = Object.keys(this.employees[0]);

  addEmployee() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
      { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
      { eId: 105, name: 'deepak', sal: 8500, gender: 'male' },
    ];
  }

  trackByempId(emp: any) {
    return emp.eId;
  }

  style1 = { color: 'blue', border: '5px dotted red' }
  style2 = { color: 'red', border: '5px solid green' }

  myClasses = {
    'm-2': true,
    'p-2': false
  }

  getClasses() {
    return this.myClasses;
  }

  students: any = [];

  openAlert() {
    Swal.fire('The Internet?', 'That thing is still around?', 'success');
  }

}
