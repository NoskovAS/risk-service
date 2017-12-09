import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskListComponent } from './risk-list.component';
import { TableComponent } from './table/table.component';
import { ChartsComponent } from './charts/charts.component';
import { RiskFormComponent } from './risk-form/risk-form.component';
import { AuthGuard } from '../guard/auth/auth.guard';

const riskRoutes: Routes = [
    {
        path: 'risk-list',
        component: RiskListComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'table',
            },
            {
                path: 'table',
                pathMatch: 'full',
                component: RiskFormComponent
            },
            {
                path: 'charts',
                pathMatch: 'full',
                component: ChartsComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(riskRoutes)],
    exports: [RouterModule]
})
export class RiskListRoutingModule { }
