import { Component, OnInit, AfterContentChecked, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ValidateService } from '../../service/validator/validate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin/admin.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, AfterContentChecked, AfterViewInit {
  public reportForm: FormGroup = null;

  @ViewChild('inputFocus') vc: any;

  username: string = localStorage.getItem('username' || null);
  reportSuccess: boolean = false;
  borderColor: string = '#204056';
  borderWidth: number = 1;

  constructor(private router: Router,
    private validateService: ValidateService,
    private fb: FormBuilder,
    private adminService: AdminService,
    private eRef: ElementRef
  ) {
    this.reportForm = fb.group({
      username: [this.username, Validators.required],
      report: ['', Validators.required]
    });
  }

  ngOnInit() {}

  ngAfterContentChecked() {}

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
 }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!(this.eRef.nativeElement.querySelector('textarea').contains(event.target))) {
      this.borderColor = '#204056';
      this.borderWidth = 1;
    }
  }

  sendReport() {
    const reportMessage = {
      username: this.reportForm.value.username,
      report: this.reportForm.value.report
    };

    if ((this.reportForm.value.report === '') || (this.reportForm.value.report === undefined) ||
    (this.reportForm.value.username === '') || (this.reportForm.value.username === undefined)) {
      this.borderWidth = 1.5;
      this.borderColor = 'red';
      return;
    }

    this.adminService.sendReport(reportMessage).subscribe(data => {
      if (data.success) {
        this.borderWidth = 3;
        this.borderColor = 'green';
        this.reportSuccess = true;
        console.log('Successful addition');
      } else {
        console.log('Unsuccessful addition');
      }
    });
  }

}
