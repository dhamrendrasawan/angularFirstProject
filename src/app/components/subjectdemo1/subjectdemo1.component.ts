import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdemo1',
  standalone: true,
  imports: [],
  templateUrl: './subjectdemo1.component.html',
  styleUrl: './subjectdemo1.component.css'
})
export class Subjectdemo1Component {

  constructor() {
    // this.subjectDemo()
    // this.behaviourSubjectDemo()
    this.replaySubjectDemo()
    this.asyncSubjectDemo()
  }

  subjectDemo() {
    const mySubject = new Subject();
    mySubject.next('AAAAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('BBBBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('CCCCCCC');
    mySubject.subscribe(val => console.log('Subscriber-3 ', val));
    mySubject.next('DDDDDDD');
    mySubject.next('EEEEEEE');
  }
  behaviourSubjectDemo() {
    const mySubject = new BehaviorSubject('Default Valueeeee');
    mySubject.next('AAAAAAAAA')
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('BBBBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('CCCCCCC');
    mySubject.subscribe(val => console.log('Subscriber-3 ', val));
    mySubject.next('DDDDDDD');
    mySubject.next('EEEEEEE');
  }
  replaySubjectDemo() {
    const mySubject = new ReplaySubject();
    mySubject.next('AAAAAAAAA')
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('BBBBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('CCCCCCC');
    mySubject.subscribe(val => console.log('Subscriber-3 ', val));
    mySubject.next('DDDDDDD');
    mySubject.next('EEEEEEE');
  }
  asyncSubjectDemo() {
    const mySubject = new AsyncSubject();
    mySubject.next('AAAAAAAAA')
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('BBBBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('CCCCCCC');
    mySubject.subscribe(val => console.log('Subscriber-3 ', val));
    mySubject.next('DDDDDDD');
    mySubject.next('EEEEEEE');
    mySubject.complete();
  }

}
