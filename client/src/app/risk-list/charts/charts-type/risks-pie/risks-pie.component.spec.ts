import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksPieComponent } from './risks-pie.component';
import { ChartsModule } from 'ng2-charts';

describe('CostRisksComponent', () => {
  let component: RisksPieComponent;
  let fixture: ComponentFixture<RisksPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
      declarations: [ RisksPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
