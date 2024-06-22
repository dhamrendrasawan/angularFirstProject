import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['cars'],
  outputs: ['bEvent'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {

  @Input() a: any;
  cars: any;

  @ViewChild('myInputBox') myInput: any;

  b = 200;
  c = 300;
  constructor(private cdr: ChangeDetectorRef) {
    console.log(document.getElementById('para1'))
  }

  bEvent = new EventEmitter();

  sendDataToParent() {
    this.bEvent.emit(this.b);
  }

  refresh() {
    this.cdr.markForCheck();
  }

  ngOnChanges() {
    console.log('child onchanges')
    this.cdr.markForCheck();
  }

  ngOnInit() {
    console.log('Child ngOnInit')
  }

  ngDoCheck() {
    console.log('child docheck')
    // this.cdr.markForCheck();
  }
  ngAfterContentInit() {
    console.log('child ngAfterContentInit')
    console.log(document.getElementById('para1'))
  }
  ngAfterContentChecked() {
    console.log('child ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
    console.log(document.getElementById('para1'))
    this.myInput.nativeElement.focus();
    this.myInput.nativeElement.style.backgroundColor = 'red';
  }
  ngAfterViewChecked() {
    console.log('child ngAfterViewChecked')
  }
  printHello() {
    console.log('helllooooo')
  }

}
