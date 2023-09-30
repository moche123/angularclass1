import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'people'
})
export class PeoplePipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
      return value.sort( (a,b) => b.age-a.age );
  }

}
