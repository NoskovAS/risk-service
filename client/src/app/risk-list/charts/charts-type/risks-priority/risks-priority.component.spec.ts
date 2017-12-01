import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksPriorityComponent } from './risks-priority.component';
import { ChartsModule } from 'ng2-charts';

describe('RisksPriorityComponent', () => {
  let component: RisksPriorityComponent;
  let fixture: ComponentFixture<RisksPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
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
