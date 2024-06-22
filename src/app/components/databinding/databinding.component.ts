import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  name:string="Dharmendra Kumar";
  address:string="Bihar";
  dharm_url="https://tse1.mm.bing.net/th?id=OIP.Jsz_73fwUX6OakphGwfmpQHaEK&pid=Api&rs=1&c=1&qlt=95&w=206&h=115";
  flag:boolean=false;
  num1:number=80;
  num2:number=10;
  f1()
  {
    alert("i am f1");

  }
  addition(a:any,b:any)
  {
    console.log(+a + +b);
  }
}
