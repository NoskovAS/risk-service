import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDelComponent } from './share/user-del/user-del.component';
import { AdminPageComponent } from './admin-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserDelComponent,
    AdminPageComponent
  ]
})
export class AdminPageModule { }
