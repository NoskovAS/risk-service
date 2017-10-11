import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'riskFilter'})

export class RiskFilterPipe implements PipeTransform {
  transform(categories: any, searchRisks: any): any {
    if (searchRisks == null) {
        return categories;
    }

    return categories.filter(function (riskname) {
      return riskname.riskname.indexOf(searchRisks) > -1;
    });
  }
}
