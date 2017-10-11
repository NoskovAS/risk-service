import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'dateFilter'})

export class DateFilterPipe implements PipeTransform {
  transform(categories: any, searchDates: any): any {
    if (searchDates == null) {
        return categories;
    }

    return categories.filter(function (date) {
      return date.date.toString().indexOf(searchDates) > -1;
    });
  }
}
