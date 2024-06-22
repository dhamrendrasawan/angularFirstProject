import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trafficlight.component.html',
  styleUrl: './trafficlight.component.css'
})
export class TrafficLightComponent {
  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  constructor() {
    this.config = {
      "red": { nextColor: 'green', duration: 4000 },
      "green": { nextColor: 'yellow', duration: 3000 },
      "yellow": { nextColor: 'red', duration: 1000 }
    };
    this.colorsArr = Object.keys(this.config);
  }
  ngDoCheck() {
    console.log('do check')
    const { nextColor, duration } = this.config[this.selectedColor];
    this.timer = setTimeout(() => {
      this.selectedColor = nextColor;
    }, duration)
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}