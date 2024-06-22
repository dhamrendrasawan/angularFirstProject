import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud-by-sir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-crud-by-sir.component.html',
  styleUrl: './employee-crud-by-sir.component.css'
})
export class EmployeeCrudBySirComponent {

  employees: any = [
    { id: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { id: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { id: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { id: 102, name: 'sita', sal: 9000, gender: 'female' },
    { id: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];  

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

    deleteRecord(eId:any)
    {
     // alert(ind);
      //alert(this.employees.slice(ind,1));
       //this.employees.slice(ind,1);
        //deleting record
       
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
         // this.employees.slice(ind,1);  
         this.employees = this.employees.filter((emp: { eId: number; }) => {
          return emp.eId != eId;
        });
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
      alert("edit"+emp);
      this.isAdd=false;
       this.selectedEmployee={...emp}
    }
      
    }

  
    

