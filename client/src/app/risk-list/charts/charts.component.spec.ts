import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsComponent } from './charts.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { RisksPriorityComponent } from './charts-type/risks-priority/risks-priority.component';
import { RisksPieComponent } from './charts-type/risks-pie/risks-pie.component';
import { RiskSidebarComponent } from '../share/risk-sidebar/risk-sidebar.component';
import { RisksCostsComponent } from './charts-type/risks-costs/risks-costs.component';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [
        ChartsComponent,
        RisksPriorityComponent,
        RisksPieComponent,
        RiskSidebarComponent,
        RisksCostsComponent
      ],
      providers: [RiskListService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
