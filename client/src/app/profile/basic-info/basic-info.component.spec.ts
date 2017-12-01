import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoComponent } from './basic-info.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateService } from '../../service/validator/validate.service';
import { ValidatorService } from '../../service/validator/validator.service';
import { ProfileService } from '../../service/profile/profile.service';
import { ValidatorMessageComponent } from '../../share/validator-message/validator-message.directive';

describe('BasicInfoComponent', () => {
  let component: BasicInfoComponent;
  let fixture: ComponentFixture<BasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [
        BasicInfoComponent,
        ValidatorMessageComponent
      ],
      providers: [ValidateService, ValidatorService, ProfileService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
