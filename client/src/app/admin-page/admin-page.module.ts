import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDelComponent } from './share/user-del/user-del.component';
import { AdminPageComponent } from './admin-page.component';
import { SharedModule } from '../share/shared.module';
import { RiskListModule } from '../risk-list/risk-list.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';

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
    AdminDashboardComponent
  ],
  providers: [
  ]
})
export class AdminPageModule { }
