import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value:any) {
    let firstChar = value.charAt(0);
    let restChar = value.substring(1);
    let sentence = firstChar.toUpperCase() + restChar.toLowerCase();
    return sentence
  }

}
