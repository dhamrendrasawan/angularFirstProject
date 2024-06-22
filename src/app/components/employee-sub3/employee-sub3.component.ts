import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeserviceSubService } from '../../services/employeeservice-sub.service';

@Component({
  selector: 'app-employee-sub3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-sub3.component.html',
  styleUrl: './employee-sub3.component.css'
})
export class EmployeeSub3Component {

  eId: number = 0;
  name: string = "";
  sal: number = 0;
  gender: string = "";

  inputEmployee = {
    eId: this.eId,
    name: this.name,
    sal: this.sal,
    gender: this.gender
  };
  constructor(private employeeserviceSubService: EmployeeserviceSubService) {

  }

  addEmp(emp: any) {
   // alert(JSON.stringify(emp) )
    this.employeeserviceSubService.sendEmpDetails(emp);
  }

}
