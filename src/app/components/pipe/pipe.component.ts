import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { CardinalToOrdinalPipe } from '../../pipes/cardinal-to-ordinal.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,FormsModule,RemainingPipe,CardinalToOrdinalPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  name:string="Dhamrendra KuMaR";
  mySal = 5000;
  myDOB = new Date();
  user = { name: 'sachin', add: 'mumbai', age: 50 };

  myMap = new Map();
  arr = [10, 20, 30, 40, 50, 60];
  msg: string = '';
  cardinalNumber:string="";
  constructor() {
    this.myMap.set('a', 10);
    this.myMap.set('b', 10);
  }
}
