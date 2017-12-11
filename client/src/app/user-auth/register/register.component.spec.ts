import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TableService } from '../../service/table/table.service';
import { ValidateService } from '../../service/validator/validate.service';
import { AuthService } from '../../service/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorMessageComponent } from '../../share/validator-message/validator-message.directive';
import { ValidatorService } from '../../service/validator/validator.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [
        RegisterComponent,
        ValidatorMessageComponent
      ],
      providers: [TableService, ValidateService, ValidatorService, AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
