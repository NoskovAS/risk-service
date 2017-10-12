import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDelComponent } from './share/user-del/user-del.component';
import { AdminPageComponent } from './admin-page.component';
import { SharedModule } from '../share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserDelComponent,
    AdminPageComponent,
  ],
  providers: [
  ]
})
export class AdminPageModule { }
