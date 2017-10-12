import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RiskListRoutingModule } from './risk-list-routing.module';
import { RiskListComponent } from './risk-list.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../share/shared.module';
import { ItemDelComponent } from './share/item-del/item-del.component';
import { ChildParentService } from '../service/child-parent/child-parent.service';
import { PaginationComponent } from './share/pagination/pagination.component';
import { ItemEditComponent } from './share/item-edit/item-edit.component';


@NgModule({
  imports: [
    CommonModule,
    RiskListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ItemDelComponent,
    TableComponent
  ],
  declarations: [
    RiskListComponent,
    TableComponent,
    FormComponent,
    ItemDelComponent,
    PaginationComponent,
    ItemEditComponent
  ],
  providers: [
    ChildParentService
  ]
})
export class RiskListModule { }
