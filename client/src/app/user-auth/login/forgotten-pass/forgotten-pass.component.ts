import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateService } from '../../../service/validator/validate.service';

@Component({
  selector: 'app-forgotten-pass',
  templateUrl: './forgotten-pass.component.html',
  styleUrls: ['./forgotten-pass.component.css']
})
export class ForgottenPassComponent implements OnInit, AfterViewInit {
  public forgotForm: FormGroup = null;

  @ViewChild('inputFocus') vc: any;

  email: string;

  constructor(private router: Router,
    private validateService: ValidateService,
    private fb: FormBuilder) {
      this.forgotForm = fb.group({
        email: ['', Validators.required],
      });
    }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
  }

  onSendSubmit() {
    console.log('Sent');
  }

}
