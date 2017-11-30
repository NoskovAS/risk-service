import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './admin-dashboard/admin-main/admin-main.component';
import { AdminNavbarComponent } from './admin-dashboard/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './share/admin-sidebar/admin-sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardChartsComponent } from './admin-dashboard/admin-main/dashboard-charts/dashboard-charts.component';
import { DashboardMessagesComponent } from './admin-dashboard/admin-main/dashboard-messages/dashboard-messages.component';
import { DashboardTablesComponent } from './admin-dashboard/admin-main/dashboard-tables/dashboard-tables.component';
import {
  OrderByPipe,
  RiskFilterPipe,
  CostFilterPipe,
  HoursFilterPipe,
  PriorityFilterPipe,
  ChanceFilterPipe,
  DateFilterPipe,
  SuggestionFilterPipe
} from '../pipes/index';
import { UserDelComponent } from './share/user-del/user-del.component';
import { TableComponent } from '../risk-list/table/table.component';
import { ItemEditComponent } from '../risk-list/share/item-edit/item-edit.component';
import { ItemDelComponent } from '../risk-list/share/item-del/item-del.component';
import { PaginationComponent } from '../risk-list/share/pagination/pagination.component';
import { AdminService } from '../service/admin/admin.service';
import { TableService } from '../service/table/table.service';
import { RiskListService } from '../service/risk-list/risk-list.service';
import { ChildParentService } from '../service/child-parent/child-parent.service';
import { AuthService } from '../service/auth/auth.service';
import { HttpModule } from '@angular/http';
import { NavbarService } from '../service/navbar/navbar.service';
import { FooterService } from '../service/footer/footer.service';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpModule],
      declarations: [AdminPageComponent,
        AdminDashboardComponent,
        AdminMainComponent,
        AdminNavbarComponent,
        AdminSidebarComponent,
        DashboardChartsComponent,
        DashboardMessagesComponent,
        DashboardTablesComponent,
        UserDelComponent,
        TableComponent,
        ItemEditComponent,
        ItemDelComponent,
        PaginationComponent,
        OrderByPipe,
        RiskFilterPipe,
        CostFilterPipe,
        HoursFilterPipe,
        PriorityFilterPipe,
        ChanceFilterPipe,
        DateFilterPipe,
        SuggestionFilterPipe
      ],
      providers: [AdminService,
        TableService,
        RiskListService,
        ChildParentService,
        AuthService,
        NavbarService,
        FooterService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
