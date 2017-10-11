import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {

    constructor(private router: Router) { }

    // Common chance calculate
    chanceCalculate(riskSprints, numberOfSprints): number {
        let num;
        num = ((riskSprints) / (numberOfSprints));
        return Math.trunc(num * 1000) / 1000;
    }

    // Priority calculate
    priorityCalculate(probability, impact): number {
        return probability * impact;
    }

    // Date conversion
    formatDate(date) {
        const monthNames = [
            'January', 'February', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    // Impact conversion
    formatImpact(impact) {
        switch (impact) {
            case 'Low':
                impact = 1;
                break;
            case 'Medium':
                impact = 2;
                break;
            case 'High':
                impact = 3;
                break;
        }
        return impact;
    }

    // Probability conversion
    formatProbability(probability) {
        switch (probability) {
            case 'Low':
                probability = 1;
                break;
            case 'Medium':
                probability = 2;
                break;
            case 'High':
                probability = 3;
                break;
        }
        return probability;
    }

    findMaxItem(items) {
        let indexArray = [];
        for (let i = 0; i < (items.length); i++) {
            indexArray.push(items[i].index);
        }
        return Math.max.apply(null, indexArray);
    }
}
