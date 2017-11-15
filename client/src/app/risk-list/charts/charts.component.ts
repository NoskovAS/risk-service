import { Component, OnInit, AfterContentChecked, OnDestroy, Output } from '@angular/core';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { Data } from '../data.class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterContentChecked, OnDestroy {
  user: Object;
  @Output() items: Data[] = [];

  costSample: any[] = [];
  riskSample: string[] = [];

  // Pie chart data
  public firstRisk: number = 0;
  public otherRisk: number = 0;
  public seventhRisk: number = 0;
  public sixthRisk: number = 0;
  public fifthRisk: number = 0;
  public fourthRisk: number = 0;
  public thirdRisk: number = 0;
  public secondRisk: number = 0;

  public pieChartType: string = 'pie';
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];


  constructor(private riskListService: RiskListService) { }

  ngOnInit() {
    this.riskRecovery();
    this.user = JSON.parse(localStorage['user']);
  }

  ngAfterContentChecked() {
  }

  ngOnDestroy() {
    this.firstRisk = 0;
    this.secondRisk = 0;
    this.thirdRisk = 0;
    this.fourthRisk = 0;
    this.fifthRisk = 0;
    this.sixthRisk = 0;
    this.seventhRisk = 0;
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
      this.costSampling();
      this.riskSampling();
      this.riskSelect();

      this.pieChartLabels = this.riskSample;
    });
  }

  private costSampling() {
    for (let i = 0; i < this.items.length; i++) {
      this.costSample.push(this.items[i].costinfluence);
    }
  }

  private riskSampling() {
    for (let i = 0; i < this.items.length; i++) {
      this.riskSample.push(this.items[i].riskname);
    }
  }

  private riskSelect() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].riskname === 'Реализация важного модуля в проекте') {
        this.firstRisk++;
        continue;
      }
      if (this.items[i].riskname === 'Задержка в покупке оборудования/ПО') {
        this.secondRisk++;
        continue;
      }
      if (this.items[i].riskname === 'Внутренние сложности календарного планирования') {
        this.thirdRisk++;
        continue;
      }
      if (this.items[i].riskname === 'Отсутствие коммуникации между представителем и заказчиком') {
        this.fourthRisk++;
        continue;
      }
      if (this.items[i].riskname === 'Недостаток квалифицированных специалистов') {
        this.fifthRisk++;
        continue;
      }
      if (this.items[i].riskname === 'Высокая вероятность изменения требований проекта') {
        this.sixthRisk++;
        continue;
      } else {
        this.otherRisk++;
      }
    }
    console.log(
      this.firstRisk + ' ' +
      this.secondRisk + ' ' +
      this.thirdRisk + ' ' +
      this.fourthRisk + ' ' +
      this.fifthRisk + ' ' +
      this.sixthRisk + ' ' +
      this.otherRisk
    );
    if (this.firstRisk !== 0) {
      console.log('Oppa!');
      this.pieChartData.push(this.fifthRisk);
    }
    if (this.secondRisk !== 0) {
      console.log('Oppa1!');
      this.pieChartData.push(this.secondRisk);
    }
    if (this.thirdRisk !== 0) {
      console.log('Oppa2!');
      this.pieChartData.push(this.thirdRisk);
    }
    if (this.fourthRisk !== 0) {
      console.log('Oppa3!');
      this.pieChartData.push(this.fourthRisk);
    }
    if (this.fifthRisk !== 0) {
      console.log('Oppa4!');
      this.pieChartData.push(this.fifthRisk);
    }
    if (this.sixthRisk !== 0) {
      console.log('Oppa5!');
      this.pieChartData.push(this.sixthRisk);
    }
    if (this.otherRisk !== 0) {
      console.log('OppaOther!');
      this.pieChartData.push(this.otherRisk);
    }
    /* this.pieChartData.push(
      this.firstRisk,
      this.secondRisk,
      this.thirdRisk,
      this.fourthRisk,
      this.fifthRisk,
      this.sixthRisk,
      this.otherRisk
    ); */
    console.log('pieChartData: ' + this.pieChartData);
  }

}
