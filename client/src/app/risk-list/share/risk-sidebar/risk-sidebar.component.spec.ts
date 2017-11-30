import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskSidebarComponent } from './risk-sidebar.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('RiskSidebarComponent', () => {
  let component: RiskSidebarComponent;
  let fixture: ComponentFixture<RiskSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
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
