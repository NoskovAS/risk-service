import { Component, OnInit } from '@angular/core';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { Data } from '../data.class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  user: Object;
  items: Data[] = [];

  /* abscissa: number[] = [];
  ordinate: number[] = []; */

  constructor(private riskListService: RiskListService) { }

  ngOnInit() {
    this.riskRecovery();
    this.user = JSON.parse(localStorage['user']);
  }

  // Recovery risks in table
  public riskRecovery() {
    const user = {
      username: localStorage.getItem('username'),
    };

    // get risks
    this.riskListService.getRisks(user).subscribe(data => {
      for (let i = 0; i !== data.length; i++) {
        this.items.push(new Data(data[i].riskname, data[i].priority, data[i].hoursinfluence,
          data[i].costinfluence, data[i].commonChance, data[i].date, data[i].suggestions, data[i].index));
      }
      console.log('riskRecovery true');
    });
  }

 /*  private costSampling() {
    for (let i = 0; i < this.items.length; i++ ) {
      this.abscissa.push(this.items[i].costinfluence);
    }
  }

  private riskSampling() {
    for (let i = 0; i < this.items.length; i++ ) {
      this.ordinate.push(this.items[i].riskname);
    }
  } */

}
