import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true
})
export class RemainingPipe implements PipeTransform {

  transform(input:string,maxLength:any) {
    return maxLength-input.length;
  }

}
