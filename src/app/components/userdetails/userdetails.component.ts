import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {

/*  userId:number=1;
  name:any='';
  email:any='';
  user:any={
    name:this.name,
    email:this.email
    //address=
  };
  userDetailsSubcription: Subscription = new Subscription();

  constructor(private http:HttpClient)
  {

  }*/
  userId: number | undefined;
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {
  }
  /*ngOnInit()
  {
    const url=`https://jsonplaceholder.typicode.com/users/${this.userId}`;
    this.userDetailsSubcription = this.http.get(url).subscribe((userResponse: any) => {
      this.user = userResponse;
    });
  }*/
  ngDoCheck()
  {
   /* const url=`https://jsonplaceholder.typicode.com/users/${this.userId}`;
    this.userDetailsSubcription = this.http.get(url).subscribe((userResponse: any) => {
      this.user = userResponse;
    });*/

    this.activatedRoute.data.subscribe((data: any) => {
      this.user = data.userInfo;
    });
  }

  goBack() {
    // this.location.back();
    this.location.historyGo(-2)
  }
  }


