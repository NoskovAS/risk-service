import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDelComponent } from './account-del.component';

describe('AccountDelComponent', () => {
  let component: AccountDelComponent;
  let fixture: ComponentFixture<AccountDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
