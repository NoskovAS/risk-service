import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-risks-priority',
  templateUrl: './risks-priority.component.html',
  styleUrls: ['./risks-priority.component.css']
})
export class RisksPriorityComponent implements OnInit, AfterContentChecked {
  @Input() prioritySample;

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

  constructor() { }

  ngOnInit() {
    this.prioritySample = new Observable(observer => {
      /* I'll do it better when I grow up.*/
      setTimeout(() => {
        observer.complete();
        this.prioritySelect(this.prioritySample);
      }, 1000);
    });
    this.prioritySample.subscribe(
      value => console.log('value: ' + value),
      error => console.log('Error'),
      function () {
        console.log('Complited');
      }
    );
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
  }
}
