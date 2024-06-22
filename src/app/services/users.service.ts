import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User, UserModel } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers2(): Observable<UserModel[]> {
    //const url = 'http://localhost:3000/employees'
    const url = 'https://jsonplaceholder.typicode.com/users'

    return this.httpClient.get<UserModel[]>(url);
  }

  fetchUserDataById(id: any) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getAllUsers(): Observable<User[]> {
    const url = 'http://localhost:3000/employees';

    return this.httpClient.get<User[]>(url).pipe(
      map((responseArr) => {
        console.log(responseArr, 'API response')
        return responseArr.map((responseObject) => {
          const { id, firstName, lastName, sal, email } = responseObject;
          return new User(id, firstName, lastName, sal, email);
        })
      })
    )
  }
}