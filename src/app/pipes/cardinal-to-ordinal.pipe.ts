import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardinalToOrdinal',
  standalone: true
})
export class CardinalToOrdinalPipe implements PipeTransform {
  transform(cardinalNumber: any) {
    if (cardinalNumber.length < 1) {
      return "";
    }
    let rem = cardinalNumber % 10;
    let j = cardinalNumber % 100;  

    switch (rem) {
      case 1: {
        if (rem == 1 && j != 11) {
          return cardinalNumber + "st";
        }
        return cardinalNumber + "th";
        break;
      }

      case 2: {
        if (rem == 2 && j != 12) {
          return cardinalNumber + "nd";

        }
        return cardinalNumber + "th";
        break;
      }
      case 3: {
        if (rem == 3 && j != 13) {
          return cardinalNumber + "rd";

        }
        return cardinalNumber + "th";
        break;
      }
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0: {
        return cardinalNumber + "th"
        break
      }
      default:
        return "";
        break;

    }

  }

}
