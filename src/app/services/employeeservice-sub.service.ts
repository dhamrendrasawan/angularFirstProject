import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceSubService {

  constructor() { }

  private subject = new Subject<any>();

  sendEmpDetails(emp: any) {
    return this.subject.next({ employeeKey: {...emp} });
  }
  clearMessages() {
    this.subject.next(null);
  }
  getEmpDetails(): Observable<any> {
    return this.subject.asObservable();

  }

}
