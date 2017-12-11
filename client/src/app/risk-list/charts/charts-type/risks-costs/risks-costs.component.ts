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
  public lineChartData = [];
  public lineChartLabels = [];
  public lineChartType: string = 'line';
  public lineChartOptions: any = {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        }
      }
    },
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
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgb(0, 255, 179)',
      borderColor: 'rgba(0, 68, 255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: 'rgb(148, 0, 148)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

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

  public chartClicked(e: any): void { }

  public chartHovered(e: any): void { }

  buildChart(riskSample, costSample) {
    this.lineChartLabels = riskSample;
    this.lineChartData = costSample;
    this.isDataAvailable = true;
  }
}
