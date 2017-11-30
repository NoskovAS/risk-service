import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDelComponent } from './account-del.component';
import { ProfileService } from '../../service/profile/profile.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountDelComponent', () => {
  let component: AccountDelComponent;
  let fixture: ComponentFixture<AccountDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [AccountDelComponent],
      providers: [ProfileService]
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
