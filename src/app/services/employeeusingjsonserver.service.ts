import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeusingjsonserverService {

  constructor(private httpClient: HttpClient) {

  }

  public getAllEmployee() {
    return this.httpClient.get('http://localhost:3000/employees');
  }
  public deleteById(id: number) {
    return this.httpClient.delete('http://localhost:3000/employees/' + id);
  }

  public updateRecord(emp: any) {
    return this.httpClient.put('http://localhost:3000/employees/' + emp.id, JSON.stringify(emp));
  }

  public addNewRecord(emp: any) {
    return this.httpClient.post('http://localhost:3000/employees/', JSON.stringify(emp));
  }

  penParticularRecord(employee: any) {

    return this.httpClient.get('http://localhost:3000/employees/' + employee.id);


  }

}
