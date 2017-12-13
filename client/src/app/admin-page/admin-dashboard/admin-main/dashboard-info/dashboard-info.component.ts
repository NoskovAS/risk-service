import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {
  public numberOfUsers: number = 12;
  public numberOfRisks: number = 408;
  public numberOfReports: number = 3;

  constructor() { }

  ngOnInit() {
  }

}
