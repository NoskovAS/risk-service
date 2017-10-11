import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'hoursFilter'})

export class HoursFilterPipe implements PipeTransform {
  transform(categories: any, searchHours: any): any {
    if (searchHours == null) {
      return categories;
    }

    return categories.filter(function (hoursinfluence) {
      return hoursinfluence.hoursinfluence.toString().indexOf(searchHours) > -1;
    });
  }
}
