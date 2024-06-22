import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User, UserModel } from '../../models/user/user.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
/*  users: User[] = [];
  usersm: UserModel[] = [];
  activatedRoute: any;
  constructor(private usersService: UsersService) {}*/

    /*const userObs = this.usersService.getAllusers();
    console.log(userObs);
    userObs.subscribe(
      ( res: any) => {
      console.log(res);
      console.log(res.status);
      console.log(res.body);
    }
      , err => {
        console.log('Error')
      },
      () => {
        console.log('Completed')
        
      }
    );*/
    //second way
   /* this.usersService.getAllUsers().subscribe((response: User[]) => {
      this.users = response;
      console.log(response);
      // Array of Objects
      // Array Of Employees
    });
    //third way using model intefrface
    this.usersService.getAllUsers2().subscribe((response: UserModel[]) => {
      this.usersm = response;
      console.log(response);
      // Array of Objects
      // Array Of Employees
    });
    console.log('24 line');
  }*/
  users: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      this.users = data;
    })
  }
}