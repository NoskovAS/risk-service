import { Component, OnInit, AfterContentChecked, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../service/child-parent/child-parent.service';
import { Data } from '../data.class';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentChecked, OnDestroy {
  @Input() riskForm: FormGroup;
  @Input() items: Data[];
  @Output() tableCleared: EventEmitter<boolean> = new EventEmitter<boolean>();

  /* Controls the display of the filter */
  filterVisible: boolean = false;

  // Sort
  public isDesc: boolean = false;
  public column: string;
  direction: number;
  //////////////////

  // Pagination
  riskCount: number; // total number of risks
  pageOffset: number = 0;
  riksLimit: number = 5; // total number of risks on the table page
  selectedRow: number;
  selectedItems: Data[] = [];

  firstitem: number;
  lastitem: number;
  //////////////////

  searchRisks: string;
  searchPriorityes: string;
  searchHours: string;
  searchCosts: string;
  searchChances: string;
  searchDates: string;
  searchSuggestions: string;

  // Variable for change table row from EventEmitter
  allowChange: boolean = false;

  constructor(private riskListService: RiskListService,
    private childParentService: ChildParentService) {
  }

  ngOnInit() {
    this.selectedRow = 1;
    this.childParentService.passVariable(localStorage.getItem('username'));
  }

  ngAfterContentChecked() {
    this.lastitem = this.selectedRow * this.riksLimit;
    this.firstitem = this.lastitem - this.riksLimit;
    this.selectedItems = this.items.slice(this.firstitem, this.lastitem);
    this.riskCount = this.items.length;
  }

  ngOnDestroy() {
    this.items = [];
  }

  sort(property: string): any {
    this.isDesc = !this.isDesc; // change the direction
    this.column = property;
    this.direction = this.isDesc ? -1 : 1;
  }

  tableClear(): any {
    const user: object = {
      uid: localStorage.getItem('uid'),
    };

    // clear table
    this.riskListService.clearTable(user).subscribe(data => {
      this.items = [];
      this.tableCleared.emit();
    });
  }

  togglefilter(): any {
    this.filterVisible === true ? this.filterVisible = false : this.filterVisible = true;
  }

  onPageChange(offset: number): any {
    this.pageOffset = offset;
    this.selectedRow = (offset / this.riksLimit) + 1;
  }

  editRow(index: number, $event: Event) {
    console.log('index: ' + index);
  }

}
