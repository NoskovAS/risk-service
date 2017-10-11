import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'chanceFilter'})

export class ChanceFilterPipe implements PipeTransform {
    transform(categories: any, searchChances: any): any {
    if (searchChances == null) {
        return categories;
    }
        return categories.filter(function(commonChance){
            return commonChance.commonChance.toString().indexOf(searchChances) > -1;
        });
    }
}
