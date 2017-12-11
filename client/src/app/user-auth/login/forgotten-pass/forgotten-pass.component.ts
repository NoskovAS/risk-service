import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotten-pass',
  templateUrl: './forgotten-pass.component.html',
  styleUrls: ['./forgotten-pass.component.css']
})
export class ForgottenPassComponent implements AfterViewInit {
  public forgotForm: FormGroup = null;

  @ViewChild('inputFocus') vc: any;

  email: string;

  constructor(private router: Router,
    private fb: FormBuilder) {
      this.forgotForm = fb.group({
        email: ['', Validators.required],
      });
    }

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
  }

  onSendSubmit() {
    console.log('Sent');
  }

}
