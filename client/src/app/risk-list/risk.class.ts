import { IRisk } from './risk.interface';

export class Risk implements IRisk {
    riskname: string;
    hoursinfluence: number;
    costinfluence: number;
    probability: number;
    impact: number;
    riskSprints: number;
    numberOfSprints: number;
    suggestions: string;
    index: number;

    constructor(riskname: string, hoursinfluence: number,
        costinfluence: number, probability: number,
        impact: number, riskSprints: number, numberOfSprints: number,
        suggestions: string, index: number) {

        this.riskname = riskname;
        this.hoursinfluence = hoursinfluence;
        this.costinfluence = costinfluence;
        this.probability = probability;
        this.impact = impact;
        this.riskSprints = riskSprints;
        this.numberOfSprints = numberOfSprints;
        this.suggestions = suggestions;
        this.index = index;
    }
}
