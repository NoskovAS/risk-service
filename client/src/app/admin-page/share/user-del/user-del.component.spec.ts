import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDelComponent } from './user-del.component';
import { AdminService } from '../../../service/admin/admin.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserDelComponent', () => {
  let component: UserDelComponent;
  let fixture: ComponentFixture<UserDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [UserDelComponent],
      providers: [AdminService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
