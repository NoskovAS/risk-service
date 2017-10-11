import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'suggestionFilter'})

export class SuggestionFilterPipe implements PipeTransform {
    transform(categories: any, searchSuggestions: any): any {
    if (searchSuggestions == null) {
        return categories;
    }

        return categories.filter(function(suggestions){
            return suggestions.suggestions.indexOf(searchSuggestions) > -1;
        });
    }
}
