import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-risks-priority',
  templateUrl: './risks-priority.component.html',
  styleUrls: ['./risks-priority.component.css']
})
export class RisksPriorityComponent implements OnInit, AfterContentChecked {
  @Input() prioritySample;
  isDataAvailable: boolean = false;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['1', '2', '3', '4', '6', '9'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [], label: 'Number of risks' }, // y
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

  ngAfterContentChecked() { }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

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
