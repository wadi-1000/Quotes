import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publishDate'
})
export class PublishDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
