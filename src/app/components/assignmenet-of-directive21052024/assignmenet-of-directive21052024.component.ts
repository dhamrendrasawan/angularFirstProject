import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignmenet-of-directive21052024',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignmenet-of-directive21052024.component.html',
  styleUrl: './assignmenet-of-directive21052024.component.css'
})
export class AssignmenetOfDirective21052024Component {
  n = 4;
  cars = ['Tata', 'Honda', 'Maruti', 'HUndai', 'Mahindra'];
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];
  employeeCol=Object.keys(this.employees[0]);
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

}
