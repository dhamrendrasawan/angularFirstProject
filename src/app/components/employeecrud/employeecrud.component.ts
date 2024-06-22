import { Component } from '@angular/core';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

@Component({
  selector: 'app-employeecrud',
  standalone: true,
  imports: [EmployeeAddComponent,EmployeeTableComponent],
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.css'
})
export class EmployeecrudComponent {

  // displayStyle = 'none';
  employees: any = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];
  childEmp:any={
    eId:0,
    name:'',
    gender:'',
    sal:0
  }
  getEmpDataFromChild(employee:any)
  {
     //alert('parent');
       //alert(JSON.stringify(employee));
       this.childEmp=employee;
       this.employees.push(this.childEmp);
  }
}
