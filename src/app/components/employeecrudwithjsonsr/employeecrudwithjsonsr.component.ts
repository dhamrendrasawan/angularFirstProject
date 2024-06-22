import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmployeeusingjsonserverService } from '../../services/employeeusingjsonserver.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-employeecrudwithjsonsr',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './employeecrudwithjsonsr.component.html',
  styleUrl: './employeecrudwithjsonsr.component.css'
})
export class EmployeecrudwithjsonsrComponent implements OnInit {
  isFormEnable: boolean = false;
  isFormEnableForEdit: boolean = false;

  isModelEnable = false;
  currentEmpRecord: any;
  eId: number = 0;
  name: string = "";
  sal: number = 0;
  gender: string = "";
  id: string = "";
  addRecord: boolean = false;
  employees: any = [
  ];
  inputEmployee = {
    eId: this.eId,
    name: this.name,
    sal: this.sal,
    gender: this.gender,
    id: this.id
  };
  selectedEmployee: any = null;
  selectedForEditEmployee = {
    eId: this.eId,
    name: this.name,
    sal: this.sal,
    gender: this.gender,
    id: this.eId
  };

  constructor(private employeeusingjsonserverService: EmployeeusingjsonserverService) {

  }

  ngOnInit() {
    this.employeeusingjsonserverService.getAllEmployee().subscribe((res: any) => {
      this.employees = res;
    }
    );
  }
  ngonchange() {
    this.employeeusingjsonserverService.getAllEmployee().subscribe((res: any) => {
      this.employees = res;
    }
    );
  }

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

    // this.employees.push(employee);
    this.employeeusingjsonserverService.addNewRecord(employee).subscribe((res: any) => {
      this.employees.push(res);
    }
    );
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

  confirmBoxForDeleteRecord(id: number) {
   // alert("id" + id);
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
        this.employeeusingjsonserverService.deleteById(id).subscribe((res: any) => {

        });
        this.employeeusingjsonserverService.getAllEmployee().subscribe((res: any) => {
          this.employees = res;
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
  openParticularRecord(employee: any) {
    this.employeeusingjsonserverService.updateRecord(employee).subscribe((res: any) => {
      this.selectedEmployee = res;
    });

  }
  modifyRecord(employee: any) {

    //alert(JSON.stringify(employee));
    this.employeeusingjsonserverService.updateRecord(employee).subscribe((res: any) => {
     // console.log(res);
    });
    console.log(this.employees);
    this.alertWithUpdateddRecord();
    this.isFormEnableForEdit = false;
  }

}


