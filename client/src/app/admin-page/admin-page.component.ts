import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RiskListModule } from '../risk-list/risk-list.module';
import { Users } from './users/users.class';
import { AdminService } from '../service/admin/admin.service';
import { SharedModule } from '../share/shared.module';
import { Data } from '../risk-list/data.class';
import { Risk } from '../risk-list/risk.class';
import { ChildParentService } from '../service/child-parent/child-parent.service';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavbarService } from '../service/navbar/navbar.service';
import { FooterService } from '../service/footer/footer.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('adminValid') adminValid: ElementRef;

  public adminForm: FormGroup = null;

  adminInit: boolean;
  adminSuccess: boolean = false;

  constructor(private router: Router,
    private adminService: AdminService,
    private fb: FormBuilder,
    private childParentService: ChildParentService,
    private navbarService: NavbarService,
    private footerService: FooterService) {

    this.adminForm = fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.navbarService.hide();
    this.footerService.hide();
    this.adminValid.nativeElement.click();
  }

  ngOnChanges() { }

  ngOnDestroy() {
    this.navbarService.show();
    this.footerService.show();
  }

  onAdminSubmit(toggle) {
    if (toggle === false) {
      this.router.navigate(['login']);
      return false;
    }

    const admin = {
      username: this.adminForm.value.login,
      password: this.adminForm.value.password
    };

    this.adminService.authenticateAdmin(admin).subscribe(data => {
      if (data.success) {
        this.adminSuccess = true;
        return true;
      } else {
        this.router.navigate(['users/login']);
        return false;
      }

    });
  }
}
