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
export class CostRisksComponent implements OnInit, AfterContentChecked {
  @Input() items: Data[];
  @Input() riskSample;

  constructor(public chartsComponent: ChartsComponent) {
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
  }
}
