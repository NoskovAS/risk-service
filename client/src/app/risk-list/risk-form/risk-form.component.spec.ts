import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskFormComponent } from './risk-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RiskSidebarComponent } from '../share/risk-sidebar/risk-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../table/table.component';
import {
  OrderByPipe,
  RiskFilterPipe,
  CostFilterPipe,
  HoursFilterPipe,
  PriorityFilterPipe,
  ChanceFilterPipe,
  DateFilterPipe,
  SuggestionFilterPipe
} from '../../pipes/index';
import { ItemEditComponent } from '../share/item-edit/item-edit.component';
import { ItemDelComponent } from '../share/item-del/item-del.component';
import { PaginationComponent } from '../share/pagination/pagination.component';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { TableService } from '../../service/table/table.service';
import { ChildParentService } from '../../service/child-parent/child-parent.service';
import { HttpModule } from '@angular/http';

describe('RiskFormComponent', () => {
  let component: RiskFormComponent;
  let fixture: ComponentFixture<RiskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [
        RiskFormComponent,
        RiskSidebarComponent,
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
      providers: [RiskListService, TableService, ChildParentService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
