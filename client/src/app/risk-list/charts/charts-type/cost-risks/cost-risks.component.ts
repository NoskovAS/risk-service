import { Component, OnInit, Input, OnDestroy, AfterContentChecked, OnChanges } from '@angular/core';
import { TableComponent } from '../../../table/table.component';
import { FormComponent } from '../../../form/form.component';
import { ChartsComponent } from '../../charts.component';
import { Data } from '../../../data.class';

@Component({
  selector: 'app-cost-risks',
  templateUrl: './cost-risks.component.html',
  styleUrls: ['./cost-risks.component.css'],
})
export class CostRisksComponent implements OnInit, OnDestroy, AfterContentChecked, OnChanges {
  @Input() items: Data[];
  @Input() abscissa = [];
  @Input() ordinate;


  // lineChart
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartType: string = 'line';


  // Pie
  public pieChartType: string = 'pie';
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [300, 500, 100];


  constructor(public chartsComponent: ChartsComponent) {
  }

  ngOnInit() {
    console.log('OOOOOOOOOOO!!!!!!!!!!!!!!!!!!!!LLLLLLLLLLLL  ' + this.items);
  }

  ngAfterContentChecked() {
  }

  ngOnChanges() {
  }

  ngOnDestroy() { }

  /* private riskSampling() {
    for (let i = 0; i = this.items.length; i++) {
      console.log(this.items.length);
      this.ordinate.push(this.items[i].riskname);
    }
  } */

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
