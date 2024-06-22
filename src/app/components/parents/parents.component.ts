import { ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [Child1Component,Child2Component,CommonModule,FormsModule],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {


  a: number;
  name: string;
  bParent: any;
  title: any = 'My Title';
  myhttp: any;
  cars = ['tata', 'honda'];

  @ViewChild('child2Ref') child2Obj: any;
  @ViewChild('myDiv1') myDiv1: any;
  @ViewChild(Child1Component) child1Comps !: any;

  parentNum1:any;

  receiveBData(data: any) {
    this.bParent = data;
  }

  constructor(private cdr:ChangeDetectorRef) { // Dependency Injection
    // constructor(private myhttp : HttpClient) { // Dependency Injection
    console.log("Parent constructor");
    this.a = 100;
    this.name = 'Sachin';
    this.myhttp = inject(HttpClient);
  }
  ngOnInit() {
    // console.log('Parent ngOnInit');

    this.myhttp.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      console.log(response)
    });
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
    console.log(this.child2Obj);
    console.log(this.myDiv1);
    console.log(document.getElementById('div1'))
  }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.child2Obj);
    console.log(this.myDiv1);

    console.log("hiiiiiiiiiii")
    console.log(this.child1Comps?._results.forEach((ele:any)=>{
      console.log(ele);
    }))

    this.child1Comps.changes.subscribe((someChange:any)=>{
      console.log('Something changed in child')
      console.log(someChange)
    })

    this.parentNum1 = this.child1Comps.num1;
    this.cdr.detectChanges();
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }

  add(a: any, b: any) {
    console.log(a + b)
  }
}
