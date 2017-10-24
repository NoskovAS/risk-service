import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskSidebarComponent } from './risk-sidebar.component';

describe('FormSidebarComponent', () => {
  let component: RiskSidebarComponent;
  let fixture: ComponentFixture<RiskSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
