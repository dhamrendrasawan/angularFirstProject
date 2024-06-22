import { CommonModule, NgFor } from '@angular/common';
import { Component, OnChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {
  isFormEnable: boolean = false;
  isFormEnableForEdit: boolean = false;

  isModelEnable = false;

  eId: number = 0;
  name: string = "";
  sal: number = 0;
  gender: string = "";
  addRecord: boolean = false;
  
  inputEmployee = {
    eId: this.eId,
    name: this.name,
    sal: this.sal,
    gender: this.gender
  };
  selectedEmployee: any = null;
  selectedForEditEmployee = {
    eId: this.eId,
    name: this.name,
    sal: this.sal,
    gender: this.gender
  };
  // displayStyle = 'none';
  employees: any = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];



  /*deleteEmpRecord(empId: number) {
    this.confirmBox();
    //this.employees=this.employees.pop()	;
    //   this.employees = this.employees.filter((emp: { eId: number; }) => emp.eId != empId1);

    this.employees = this.employees.filter((emp: { eId: number; }) => {
      return emp.eId != empId;
    });
  }*/


  /*getRecord(empId: number) {
    //deleting record
    this.employees = this.employees.filter((emp: { eId: number; }) => {
      return emp.eId == empId;
    });
  }*/
  addEmp(employee: any) {

    this.employees.push(employee);
    this.alertWithAddedRecord();
    this.isFormEnable = false;

  }
  enableForm() {
    this.isFormEnable = true;
  }
  enableFormForEdit(employee: any) {
    this.selectedForEditEmployee = employee;
    // this.isFormEnableForEdit = true;
  }

  confirmBoxForDeleteRecord(empId: number) {

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
        this.employees = this.employees.filter((emp: { eId: number; }) => {
          return emp.eId != empId;
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

  alertWithAddedRecord() {
    Swal.fire('Added Successfully');
  }
  alertWithUpdateddRecord() {
    Swal.fire('updated Successfully');
  }
  openDetails(employee: any) {
    this.selectedEmployee = employee;
    // this.displayStyle = 'block';

  }
  modiyRecord(employee: any) {

    //alert(JSON.stringify(employee));
    for (let i = 0; i < this.employees.length; i++) {
      //console.log(this.employees[i].eId);
      if (employee.eId == this.employees[i].eId) {
        this.employees[i].name = employee.name;
        this.employees[i].sal = employee.sal;
        this.employees[i].gender = employee.gender;
      }

    }
    this.alertWithUpdateddRecord();
    this.isFormEnableForEdit = false;
  }

}


