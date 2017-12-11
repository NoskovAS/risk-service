import { Injectable } from '@angular/core';

@Injectable()
export class TableService {

    constructor() { }

    // Common chance calculate
    chanceCalculate(riskSprints: number, numberOfSprints: number): number {
        let num: number;
        num = ((riskSprints) / (numberOfSprints));
        return Math.trunc(num * 1000) / 1000;
    }

    // Priority calculate
    priorityCalculate(probability: number, impact: number): number {
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
    formatImpact(impact: any): number {
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
    formatProbability(probability: any): number {
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

    findMaxItem(items): number {
        let indexArray = [];
        for (let i = 0; i < (items.length); i++) {
            indexArray.push(items[i].index);
        }
        return Math.max.apply(null, indexArray);
    }
}
