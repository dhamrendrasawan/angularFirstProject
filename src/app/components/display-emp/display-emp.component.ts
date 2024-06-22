import { Component, NgModule } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-display-emp',
  standalone: true,
  imports: [CommonModule,
    NgFor

  ],
  templateUrl: './display-emp.component.html',
  styleUrl: './display-emp.component.css'
})
export class DisplayEmpComponent {
  isData:boolean=false;
  employees: any = {
    eId: 0,
    name: '',
    sal: 0,
    gender: ''
  }
  constructor(private empService: EmployeeServiceService) {
    this.empService.getAllEmployees();
  }
  getAllEmployees() {
    this.isData=true;
    this.employees = this.empService.getAllEmployees();
  }

  getMaleEmployees() {
    this.isData=true;
    this.employees = this.empService.getMaleEmployees();
  }

  getFemaleEmployees() {
    this.isData=true;
    this.employees = this.empService.getFemaleEmployees();
  }

}
