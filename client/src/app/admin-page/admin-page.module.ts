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
import { DashboardChartsComponent } from './admin-dashboard/admin-main/dashboard-charts/dashboard-charts.component';
import { DashboardTablesComponent } from './admin-dashboard/admin-main/dashboard-tables/dashboard-tables.component';
import { DashboardMessagesComponent } from './admin-dashboard/admin-main/dashboard-messages/dashboard-messages.component';
import { RouterModule } from '@angular/router';
import { AdminPageRoutingModule } from './admin-page.routing.module';
import { AdminSidebarComponent } from './share/admin-sidebar/admin-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminPageRoutingModule,
    RiskListModule,
    RouterModule
  ],
  declarations: [
    UserDelComponent,
    AdminPageComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminMainComponent,
    DashboardChartsComponent,
    DashboardTablesComponent,
    DashboardMessagesComponent,
    AdminSidebarComponent
  ],
  providers: [
  ]
})
export class AdminPageModule { }
