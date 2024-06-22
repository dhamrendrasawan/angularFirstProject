import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs:['employeeEvent']
})
export class EmployeeAddComponent {

  selectedEmployee:any={
    eId:0,
    name:'',
    gender:'',
    sal:0
  }    
    newEmployee:any={
      eId:0,
      name:'',
      gender:'',
      sal:0
    }
    constructor()
    {
       this.selectedEmployee={...this.newEmployee};
    }

  isAdd:boolean=true;
  employeeEvent=new EventEmitter();
  addEmployee()
  {

    //alert('hi');
    //alert(JSON.stringify(this.selectedEmployee))
     // this.selectedEmployee=emp;
      this.employeeEvent.emit({...this.selectedEmployee});

  }
}
