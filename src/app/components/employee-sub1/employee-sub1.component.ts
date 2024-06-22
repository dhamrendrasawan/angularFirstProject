import { Component } from '@angular/core';
import { EmployeeserviceSubService } from '../../services/employeeservice-sub.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-employee-sub1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-sub1.component.html',
  styleUrl: './employee-sub1.component.css'
})
export class EmployeeSub1Component {
  employees: any[] = [];
  
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
 //USING Subject
  employeesSubject:any=[
    {
      "employeeKey":
          {
            eId: this.eId,
            name: this.name,
            sal: this.sal,
            gender: this.gender
          }     
    }
  ];

  constructor(private employeeserviceSubService: EmployeeserviceSubService) {

  }
  //using Subject
  ngOnInit() {
    this.employeeserviceSubService.getEmpDetails().subscribe(employee => {
     // alert(JSON.stringify(employee));
      if (employee) {
       // alert(JSON.stringify(employee))
        this.employees.push({ ...employee });
        //alert(JSON.stringify(this.employees))
      } else {
        this.employees = [];
      }
    })
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
        this.employeesSubject=this.employees;
       // alert(JSON.stringify(this.employeesSubject));
        this.employees = this.employeesSubject.filter((emp: any) => {
         // alert(JSON.stringify(emp));
          //alert(emp.employeeKey.eId+" "+empId)
          return emp.employeeKey.eId != empId;
        });

        //{"employeeKey":{"eId":87887,"n
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
    //alert(JSON.stringify(employee));
    //console.log(JSON.stringify(employee));
    this.selectedEmployee = employee;
    // this.displayStyle = 'block';

  }
  modiyRecord(employee: any) {

    //alert(JSON.stringify(employee));
    this.employeesSubject=this.employees;
    //alert("this.employeesSubject"+JSON.stringify(this.employeesSubject));
    /*for (let i = 0; i < this.employees.length; i++) {
      //console.log(this.employees[i].eId);
      if (employee.eId == this.employees[i].eId) {
        this.employees[i].name = employee.name;
        this.employees[i].sal = employee.sal;
        this.employees[i].gender = employee.gender;
      }

    }*/
    this.alertWithUpdateddRecord();
    this.isFormEnableForEdit = false;
  }

}
