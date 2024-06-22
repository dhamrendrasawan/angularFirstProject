import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs:['employees']
})
export class EmployeeTableComponent {
      
  //@Input() childEmp:any;
   employees:any;
     
   //employees.push(childEmp);
    isAdd:boolean=true;
    selectedEmployee!:any;    
    newEmployee:any={
      id:0,
      name:'',
      gender:'',
      sal:0
    }
    constructor()
    {
       this.selectedEmployee={...this.newEmployee};
      // this.employees.push(this.childEmp);
    }
    viewEmployee(emp:any)
    {
      this.selectedEmployee=emp;

      Swal.fire({
        title: '<strong>Employee Details</strong>',
        icon: 'info',
        html:`
        <div>
           <div>Emp id: ${this.selectedEmployee.id} </div>
           <div>Emp id: ${this.selectedEmployee.name} </div>
           <div>Emp id: ${this.selectedEmployee.sal} </div>
           <div>Emp id: ${this.selectedEmployee.gender} </div>
        </div>
        `
      })
    }

    deleteRecord(ind:any)
    {
      alert(ind);
      alert(this.employees.slice(ind,1));
       this.employees.slice(ind,1);
       Swal.fire({
        title: 'Are you sure want to delete?',
        text: 'You will not be able to recover this file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          //deleting record
          this.employees.slice(ind,1);  
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      }
      )
    }
    addEmployee()
    {
      this.employees.push(this.selectedEmployee);
      this.selectedEmployee={...this.newEmployee};
      Swal.fire('Added','Employee Added Sucessfully','success');
    }

    editEmployee(emp:any)
    {
      alert("edit");
      this.isAdd=false;
       this.selectedEmployee={...emp}
    }
      

}
