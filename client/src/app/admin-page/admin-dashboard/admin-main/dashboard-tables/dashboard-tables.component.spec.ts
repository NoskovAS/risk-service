import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTablesComponent } from './dashboard-tables.component';
import {
  OrderByPipe,
  RiskFilterPipe,
  CostFilterPipe,
  HoursFilterPipe,
  PriorityFilterPipe,
  ChanceFilterPipe,
  DateFilterPipe,
  SuggestionFilterPipe
} from '../../../../pipes/index';
import { UserDelComponent } from '../../../share/user-del/user-del.component';
import { ItemEditComponent } from '../../../../risk-list/share/item-edit/item-edit.component';
import { TableComponent } from '../../../../risk-list/table/table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ItemDelComponent } from '../../../../risk-list/share/item-del/item-del.component';
import { PaginationComponent } from '../../../../risk-list/share/pagination/pagination.component';
import { AdminService } from '../../../../service/admin/admin.service';
import { TableService } from '../../../../service/table/table.service';
import { RiskListService } from '../../../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../../../service/child-parent/child-parent.service';
import { AuthService } from '../../../../service/auth/auth.service';

describe('DashboardTablesComponent', () => {
  let component: DashboardTablesComponent;
  let fixture: ComponentFixture<DashboardTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpModule],
      declarations: [
        DashboardTablesComponent,
        UserDelComponent,
        ItemEditComponent,
        TableComponent,
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
      providers: [AdminService, TableService, RiskListService, ChildParentService, AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
