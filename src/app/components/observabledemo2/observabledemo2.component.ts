import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observabledemo2',
  standalone: true,
  imports: [],
  templateUrl: './observabledemo2.component.html',
  styleUrl: './observabledemo2.component.css'
})
export class Observabledemo2Component {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.forkJoinDemo();
     this.withoutMergemap();
     //this.withMergemap();
    //this.concatMapDemo();
  }

  forkJoinDemo() {
    const userNames = [2, 5, 1];//observable 
    let requests = userNames.map(userName => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userName}`);
    });
    forkJoin(requests).subscribe((responses: any) => {
      console.log(responses);
    });
  }
  withoutMergemap() {
    let userIdPublisher = of([1, 3, 5, 7, 9]);
    // API Call
    userIdPublisher.subscribe((userIds: any) => {
      userIds.forEach((userId: any) => {
        this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe((userDetails: any) => {
          console.log(userDetails)
        })
      })
    });
  }

  withMergemap() {
    const usersPublisher = of(1, 2, 3, 4);

    usersPublisher.pipe(mergeMap((value: any, ind: number) => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${value}`)
    })).subscribe((details: any) => {
      console.log(details)
    })

  }
  concatMapDemo() {
    const usersPublisher = of(1, 2, 3, 4,11);

    usersPublisher.pipe(concatMap((value: any) => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${value}`)
    })).subscribe((details: any) => {
      console.log(details)
    })

  }

}
