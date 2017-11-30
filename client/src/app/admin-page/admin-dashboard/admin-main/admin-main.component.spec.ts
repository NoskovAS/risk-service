import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainComponent } from './admin-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardMessagesComponent } from './dashboard-messages/dashboard-messages.component';
import { DashboardTablesComponent } from './dashboard-tables/dashboard-tables.component';
import {
  OrderByPipe,
  SuggestionFilterPipe,
  CostFilterPipe,
  HoursFilterPipe,
  ChanceFilterPipe,
  DateFilterPipe,
  RiskFilterPipe,
  PriorityFilterPipe
} from '../../../pipes/index';
import { UserDelComponent } from '../../share/user-del/user-del.component';
import { TableComponent } from '../../../risk-list/table/table.component';
import { FormsModule } from '@angular/forms';
import { ItemEditComponent } from '../../../risk-list/share/item-edit/item-edit.component';
import { ItemDelComponent } from '../../../risk-list/share/item-del/item-del.component';
import { PaginationComponent } from '../../../risk-list/share/pagination/pagination.component';
import { AdminService } from '../../../service/admin/admin.service';
import { HttpModule } from '@angular/http';
import { TableService } from '../../../service/table/table.service';
import { RiskListService } from '../../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../../service/child-parent/child-parent.service';
import { AuthService } from '../../../service/auth/auth.service';

describe('AdminMainComponent', () => {
  let component: AdminMainComponent;
  let fixture: ComponentFixture<AdminMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpModule],
      declarations: [
        AdminMainComponent,
        DashboardChartsComponent,
        DashboardMessagesComponent,
        DashboardTablesComponent,
        UserDelComponent,
        ItemEditComponent,
        ItemDelComponent,
        TableComponent,
        PaginationComponent,
        OrderByPipe,
        RiskFilterPipe,
        PriorityFilterPipe,
        CostFilterPipe,
        HoursFilterPipe,
        ChanceFilterPipe,
        DateFilterPipe,
        SuggestionFilterPipe,
      ],
      providers: [
        AdminService,
        TableService,
        RiskListService,
        ChildParentService,
        AuthService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
