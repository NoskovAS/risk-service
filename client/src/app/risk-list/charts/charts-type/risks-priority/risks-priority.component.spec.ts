import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksPriorityComponent } from './risks-priority.component';

describe('RisksPriorityComponent', () => {
  let component: RisksPriorityComponent;
  let fixture: ComponentFixture<RisksPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisksPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
