import { Component, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../service/admin/admin.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements AfterViewInit {
  public reportForm: FormGroup = null;

  @ViewChild('inputFocus') vc: any;

  username: string = localStorage.getItem('username' || null);
  reportSuccess: boolean = false;
  borderColor: string = '#204056';
  borderWidth: number = 1;

  constructor(private fb: FormBuilder,
    private adminService: AdminService,
    private eRef: ElementRef
  ) {
    this.reportForm = fb.group({
      username: [this.username, Validators.required],
      report: ['', Validators.required]
    });
  }

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
    const reportMessage: object = {
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
