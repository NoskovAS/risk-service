import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  @Output() sidebarType: EventEmitter<boolean> = new EventEmitter<boolean>();
  sidebarWidth: string = '220';
  buttonWidth: string = '220';
  navMarginLeft: string = '20';
  navLinkActive: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebarType() {
    if (this.sidebarWidth === '220') {
      this.sidebarWidth = '50';
      this.buttonWidth = '50';
      this.navMarginLeft = '10';
      this.navLinkActive = false;
      this.sidebarType.emit(true);
    } else {
      this.sidebarWidth = '220';
      this.buttonWidth = '220';
      this.navLinkActive = true;
      this.sidebarType.emit(false);
    }
  }

}
