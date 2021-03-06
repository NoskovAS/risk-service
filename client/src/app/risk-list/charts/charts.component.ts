import { Component, OnInit, Output } from '@angular/core';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { Data } from '../data.class';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  items: Data[] = [];
  user: Object;

  /* public risks: Observable<string>; */
  public riskSample: string[] = [];
  public costSample: number[] = [];
  public hoursSample: number[] = [];
  public prioritySample: number[] = [];
  public chanceSample: number[] = [];
  public suggestionsSample: string[] = [];

  constructor(private riskListService: RiskListService) { }

  ngOnInit() {
    this.riskRecovery();
    this.user = JSON.parse(localStorage.getItem('user') || 'null');
  }

  // Recovery risks in table
  private riskRecovery() {
    const user = {
      uid: localStorage.getItem('uid'),
    };

    // get risks
    this.riskListService.getRisks(user).subscribe(data => {
      for (let i = 0; i !== data.length; i++) {
        this.items.push(new Data(data[i].riskname, data[i].priority, data[i].hoursinfluence,
          data[i].costinfluence, data[i].commonChance, data[i].date, data[i].suggestions, data[i].index));
      }
      /* Extracting data from array */
      this.sampling('riskname');
      this.sampling('costinfluence');
      this.sampling('hoursinfluence');
      this.sampling('priority');
      this.sampling('commonChance');
      this.sampling('suggestions');
    });
  }

  /* Extracting the required data from an array */
  private sampling(item) {
    let sampleArray: any[] = [];
    for (let i = 0; i < this.items.length; i++) {
      sampleArray.push(this.items[i][item]);
    }

    if (item === 'riskname') { this.riskSample = sampleArray; }
    if (item === 'costinfluence') { this.costSample = sampleArray; }
    if (item === 'hoursinfluence') { this.hoursSample = sampleArray; }
    if (item === 'priority') { this.prioritySample = sampleArray; }
    if (item === 'commonChance') { this.chanceSample = sampleArray; }
    if (item === 'suggestions') { this.suggestionsSample = sampleArray; }
  }

  public getRisks(): Observable<string[]> {
    return Observable.of(this.riskSample);
  }

  public getCost(): Observable<number[]> {
    return Observable.of(this.costSample);
  }

}
