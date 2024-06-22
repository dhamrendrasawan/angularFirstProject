import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-httpclient-comp',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './httpclient-comp.component.html',
  styleUrl: './httpclient-comp.component.css'
})
export class HttpclientCompComponent {
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.fetchUsersJavascript()
    this.fetchUsersAngular()
  }
  fetchUsersJavascript() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      (res) => {
        res.json().then(
          (users) => {
            console.log(users)
          },
          (err) => { console.log(err) },
        )
      },
      (err) => { console.log(err) },
    );
  }

  fetchUsersAngular() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (resp) => {
        console.log(resp)
      }
    )
  }

}
