import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskListComponent } from './risk-list.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'risklist', component: RiskListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskListRoutingModule { }
