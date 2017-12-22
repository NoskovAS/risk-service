import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-risks-priority',
  templateUrl: './risks-priority.component.html',
  styleUrls: ['./risks-priority.component.css']
})
export class RisksPriorityComponent implements OnInit {
  @Input() itemsLength;
  @Input() prioritySample;
  isDataAvailable: boolean = false;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    layout: {
      padding: {
        left: 10,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true,
              userCallback: function(label, index, labels) {
                  // when the floored value is the same as the value we have a whole number
                  if (Math.floor(label) === label) {
                      return label;
                  }

              },
          }
      }],
  },
  };
  public barChartLabels: string[] = ['1', '2', '3', '4', '6', '9'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [], label: 'Number of risks' },
  ];
  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgb(255, 0, 21)',
      borderColor: 'rgb(148, 0, 148)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.prioritySample = new Observable(observer => {
      /* I'll do it better when I grow up.*/
      setTimeout(() => {
        observer.complete();
        this.prioritySelect(this.prioritySample);
      }, 1000);
    });
    this.prioritySample.subscribe();
  }

  // events
  public chartClicked(e: any): void { }

  public chartHovered(e: any): void { }

  prioritySelect(prioritySample) {
    let firstPriority: number = 0;
    let secondPriority: number = 0;
    let thirdPriority: number = 0;
    let fourthPriority: number = 0;
    let sixthPriority: number = 0;
    let ninthPriority: number = 0;
    for (let i = 0; i < prioritySample.length; i++) {
      switch (prioritySample[i]) {
        case 1:
          firstPriority++;
          break;
        case 2:
          secondPriority++;
          break;
        case 3:
          thirdPriority++;
          break;
        case 4:
          fourthPriority++;
          break;
        case 6:
          sixthPriority++;
          break;
        case 9:
          ninthPriority++;
          break;

      }
    }
    let clone: any[] = [
      { data: [firstPriority, secondPriority, thirdPriority, fourthPriority, sixthPriority, ninthPriority], label: 'Number of risks' }
    ];
    this.barChartData = clone;
    this.isDataAvailable = true;
  }
}
