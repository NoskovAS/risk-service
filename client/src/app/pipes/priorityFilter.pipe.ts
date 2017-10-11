import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'priorityFilter'})

export class PriorityFilterPipe implements PipeTransform {
  transform(categories: any, searchPriorityes: any): any {
    if (searchPriorityes == null) {
      return categories;
    }

    return categories.filter(function (priority) {
      return priority.priority.toString().indexOf(searchPriorityes) > -1;
    });
  }
}
