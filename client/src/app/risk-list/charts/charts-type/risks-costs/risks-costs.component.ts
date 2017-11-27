import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-risks-costs',
  templateUrl: './risks-costs.component.html',
  styleUrls: ['./risks-costs.component.css']
})
export class RisksCostsComponent implements OnInit, OnDestroy {
  @Input() costSample;
  @Input() riskSample;
  isDataAvailable: boolean = false;
  lineChartLegend: boolean = false;

  // lineChart
  public lineChartData = []; // y
  public lineChartLabels = []; // x
  public lineChartType: string = 'line';
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        display: false
      }]
    }
  };

  constructor() { }

  ngOnInit() {
    this.riskSample = new Observable(observer => {
      /* I'll do it better when I grow up.*/
      setTimeout(() => {
        observer.complete();
        this.buildChart(this.riskSample, this.costSample);
      }, 1000);
    });
    this.riskSample.subscribe();
  }

  ngOnDestroy() {
    this.lineChartLabels.length = 0;
    this.lineChartData.length = 0;
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  buildChart(riskSample, costSample) {
    this.lineChartLabels = riskSample;
    this.lineChartData = costSample;
    this.isDataAvailable = true;
  }
}
