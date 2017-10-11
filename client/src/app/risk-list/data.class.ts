import { IData } from './data.interface';

export class Data implements IData {
    riskname: string;
    priority: number;
    hoursinfluence: number;
    costinfluence: number;
    commonChance: number;
    date: string;
    suggestions: string;
    index: number;

    constructor(riskname: string, priority: number,
        hoursinfluence: number, costinfluence: number,
        commonChance: number, date: string, suggestions: string, index: number) {

        this.riskname = riskname;
        this.priority = priority;
        this.hoursinfluence = hoursinfluence;
        this.costinfluence = costinfluence;
        this.commonChance = commonChance;
        this.date = date;
        this.suggestions = suggestions;
        this.index = index;
    }
}
