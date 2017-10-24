import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AdminService } from '../../../service/admin/admin.service';
import { TableService } from '../../../service/table/table.service';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ChildParentService } from '../../../service/child-parent/child-parent.service';
import { RiskListService } from '../../../service/risk-list/risk-list.service';
import { Data } from '../../../risk-list/data.class';
import { Users } from '../../users/users.class';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
