import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDelComponent } from './share/user-del/user-del.component';
import { AdminPageComponent } from './admin-page.component';
import { SharedModule } from '../share/shared.module';
import { RiskListModule } from '../risk-list/risk-list.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RiskListModule
  ],
  declarations: [
    UserDelComponent,
    AdminPageComponent
  ],
  providers: [
  ]
})
export class AdminPageModule { }
