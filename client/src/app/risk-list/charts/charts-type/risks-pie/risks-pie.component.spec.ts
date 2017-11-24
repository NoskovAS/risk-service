import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksPieComponent } from './risks-pie.component';

describe('CostRisksComponent', () => {
  let component: RisksPieComponent;
  let fixture: ComponentFixture<RisksPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
