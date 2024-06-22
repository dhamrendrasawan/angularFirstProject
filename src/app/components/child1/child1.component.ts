import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  aChild1: any;
  child2Ref: any;
  bParent: any;
  title: any;
  num1:number=555;

  constructor() {
    console.log('Child-1 Constructor')
  }
  ngOnChanges(myChanges: any) {
    console.log('Child-1 ngOnChanges');
    console.log(myChanges)
  }

  ngOnInit() {
    console.log('Child-1 ngOnInit')
  }

}
