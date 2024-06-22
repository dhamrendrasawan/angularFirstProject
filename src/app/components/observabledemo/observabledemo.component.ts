import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, filter, from, interval, map, of, range, take } from 'rxjs';


@Component({
  selector: 'app-observabledemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observabledemo.component.html',
  styleUrl: './observabledemo.component.css'
})
export class ObservabledemoComponent {

  numObservable: any;
  time$:any;
  myTime:any;

  ngOnInit() {
    // this.testfunction1();
    // this.testfunction2();
    this.testfunction3();
    this.testfunction1();
    this.testfunction2();

    setInterval(()=>{
      this.myTime = new Date().toLocaleTimeString();
    },1000)
  }

  testfunction1() {
    // publisher
    const observable1 = new Observable((publisher) => {
      publisher.next('AAAAAAAA')
      publisher.next('BBBBBBBB')
      publisher.next('CCCCCCCC')
      publisher.next('DDDDDDDD')
      publisher.complete();
    });

    // subscriber
    observable1.subscribe({
      next: (v) => {
        console.log('next method called...')
        console.log(v)
      },
      error: (e) => console.error(e),
      complete: () => console.info('completed'),
    });

  }

  testfunction2() {
    // cars is array, not observable
    let cars = ['tata', 'honda', 'maruti', 'hundai'];
    let carsObservable = from(cars);
    carsObservable.subscribe((res: any) => {
      console.log(res);
    });

    // of() rxjs
    let namesObservable = of('Dhamrendra', 'Siva', 'Mona', 'Vikas');
    namesObservable.subscribe((res: any) => {
      console.log(res);
    });

    this.numObservable = interval(2000);

    //const only5 = this.numObservable.pipe(take(5));
    const only5 = this.numObservable.pipe(take(5));

    
    only5.subscribe((res: any) => {
      console.log(res);
    });

  }
  testfunction3() {
    let myNumbers = range(10, 20);  // 10-29
    // myNumbers.subscribe((res: any) => console.log(res));

    let even_nums = myNumbers.pipe(filter(ele => ele % 2 == 0));
    // even_nums.subscribe((res: any) => console.log(res));

    let square = even_nums.pipe(map(ele => ele * ele));
    square.subscribe((res: any) => console.log(res));

    this.time$ = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
    });


  }

}
