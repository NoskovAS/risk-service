import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksCostsComponent } from './risks-costs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RisksCostsComponent', () => {
  let component: RisksCostsComponent;
  let fixture: ComponentFixture<RisksCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RisksCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
