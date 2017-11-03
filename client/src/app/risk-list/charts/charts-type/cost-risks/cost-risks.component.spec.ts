import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostRisksComponent } from './cost-risks.component';

describe('CostRisksComponent', () => {
  let component: CostRisksComponent;
  let fixture: ComponentFixture<CostRisksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostRisksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
