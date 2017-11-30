import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassChangeComponent } from './pass-change.component';
import { ValidateService } from '../../service/validator/validate.service';
import { ValidatorService } from '../../service/validator/validator.service';
import { ProfileService } from '../../service/profile/profile.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorMessageComponent } from '../../share/validator-message/validator-message.directive';

describe('PassChangeComponent', () => {
  let component: PassChangeComponent;
  let fixture: ComponentFixture<PassChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [
        PassChangeComponent,
        ValidatorMessageComponent],
      providers: [ValidateService, ValidatorService, ProfileService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
