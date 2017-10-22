import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDelComponent } from './share/user-del/user-del.component';
import { AdminPageComponent } from './admin-page.component';
import { SharedModule } from '../share/shared.module';
import { RiskListModule } from '../risk-list/risk-list.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-dashboard/admin-navbar/admin-navbar.component';
import { AdminMainComponent } from './admin-dashboard/admin-main/admin-main.component';
import { AdminFooterComponent } from './admin-dashboard/admin-footer/admin-footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RiskListModule
  ],
  declarations: [
    UserDelComponent,
    AdminPageComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminMainComponent,
    AdminFooterComponent
  ],
  providers: [
  ]
})
export class AdminPageModule { }
