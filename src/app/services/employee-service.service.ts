import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employees: any = [
    { eId: 101, name: 'Sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'Geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'Sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'Sita', sal: 9000, gender: 'female' },
    { eId: 106, name: 'Rajesh', sal: 8090, gender: 'male' },
    { eId: 107, name: 'Jyoti', sal: 7810, gender: 'female' },
    { eId: 108, name: 'Dk', sal: 5600, gender: 'male' },
    { eId: 109, name: 'Rita', sal: 6700, gender: 'female' },
    { eId: 1010, name: 'Deepak', sal: 7800, gender: 'male' },
  ];


  getAllEmployees() {
    return this.employees;
  }

  getMaleEmployees() {
    return this.employees.filter((emp: any) => emp.gender === 'male')
  }

  getFemaleEmployees() {
    return this.employees.filter((emp: any) => emp.gender === 'female')

  }


  constructor() { }

}
