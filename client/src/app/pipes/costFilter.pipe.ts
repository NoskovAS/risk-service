import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'costFilter'})

export class CostFilterPipe implements PipeTransform {
  transform(categories: any, searchCosts: any): any {
    if (searchCosts == null) {
        return categories;
    }

    return categories.filter(function (costinfluence) {
      return costinfluence.costinfluence.toString().indexOf(searchCosts) > -1;
    });
  }
}
