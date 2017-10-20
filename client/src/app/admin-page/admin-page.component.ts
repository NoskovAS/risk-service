import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RiskListModule } from '../risk-list/risk-list.module';
import { Users } from './users/users.class';
import { AdminService } from '../service/admin/admin.service';
import { SharedModule } from '../share/shared.module';
import { TableService } from '../service/table/table.service';
import { Data } from '../risk-list/data.class';
import { Risk } from '../risk-list/risk.class';
import { RiskListService } from '../service/risk-list/risk-list.service';
import { ChildParentService } from '../service/child-parent/child-parent.service';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('adminValid') adminValid: ElementRef;
  public adminForm: FormGroup = null;
  adminSuccess: boolean = false;

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {

    this.adminForm = fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.adminValid.nativeElement.click();
  }

  ngOnChanges() { }

  ngOnDestroy() { }

  /* onAdminSubmit(resolution) {
    if (resolution === false) {
      this.router.navigate(['login']);
    } else if (resolution === true) {
      return true;
    }
  } */

  onAdminSubmit(toggle) {
    if (toggle === false) {
      this.router.navigate(['login']);
      return false;
    }
    const admin = {
      username: this.adminForm.value.login,
      password: this.adminForm.value.password
    };

    this.authService.authenticateUser(admin).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.adminSuccess = true;
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }

    });
  }
}
