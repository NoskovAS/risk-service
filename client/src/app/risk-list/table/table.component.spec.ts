import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  OrderByPipe,
  SuggestionFilterPipe,
  CostFilterPipe,
  HoursFilterPipe,
  ChanceFilterPipe,
  DateFilterPipe,
  RiskFilterPipe,
  PriorityFilterPipe
} from '../../pipes/index';
import { FormsModule } from '@angular/forms';
import { ItemEditComponent } from '../../risk-list/share/item-edit/item-edit.component';
import { ItemDelComponent } from '../../risk-list/share/item-del/item-del.component';
import { PaginationComponent } from '../../risk-list/share/pagination/pagination.component';
import { AdminService } from '../../service/admin/admin.service';
import { HttpModule } from '@angular/http';
import { TableService } from '../../service/table/table.service';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../service/child-parent/child-parent.service';
import { AuthService } from '../../service/auth/auth.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpModule],
      declarations: [
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
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
