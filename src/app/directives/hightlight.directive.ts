import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hightlight]',
  standalone: true
})
export class HightlightDirective {

    constructor(private ele: ElementRef) {
      console.log(ele);
    }
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow', 'red');
      console.log('mouse enter');
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('', '');
      console.log('mouse leave');

    }
    private highlight(bgColor: string, color: string) {
      this.ele.nativeElement.style.backgroundColor = bgColor;
      this.ele.nativeElement.style.color = color;
    }
}
