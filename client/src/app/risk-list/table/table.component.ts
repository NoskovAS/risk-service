import { Component, OnInit, AfterContentChecked, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../service/child-parent/child-parent.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from '../data.class';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentChecked {
  @Input() riskForm: FormGroup;
  @Input() items;
  @Input() deleted;
  @Output() tableCleared: EventEmitter<boolean> = new EventEmitter<boolean>();

  visible: boolean = false;

  // Sort
  isDesc: boolean = false;
  column: string;
  direction: number;

  count: number;
  offset: number = 0;
  limit: number = 5;
  selectedRow: number;
  selectedItems: Data[] = [];

  firstitem: number;
  lastitem: number;

  // Variable for change table row from EventEmitter
  allowChange: boolean = false;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private riskListService: RiskListService,
              private childParentService: ChildParentService) {
  }

  ngOnInit() {
    /* this.router.navigate(['/page', 1]); */
    this.selectedRow = 1;
  }

  ngAfterContentChecked() {
    this.lastitem = this.selectedRow * this.limit;
    this.firstitem = this.lastitem - this.limit;
    this.selectedItems = this.items.slice(this.firstitem, this.lastitem);
    this.count = this.items.length;
  }

  sort(property: string) {
    this.isDesc = !this.isDesc; // change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  tableClear() {
    const user = {
        username: localStorage.getItem('username'),
    };

    // clear table
    this.riskListService.clearTable(user).subscribe(data => {
        this.items = [];
        this.tableCleared.emit();
        console.log('Successful clear');
    });
  }

  togglefilter() {
    this.visible === true ? this.visible = false : this.visible = true;
  }

  onPageChange(offset) {
    this.offset = offset;
    this.selectedRow = (offset / this.limit) + 1;
  }

  editRow(index, $event) {
    this.trackByFn(index, 2);
    console.log('index: ' + index);
    /* this.allowChange === false ? this.allowChange = true : this.allowChange = false; */
  }

  testfoo(text) {
    console.log('fjfjf' + text);
  }

  trackByFn(index, item) {
    /* console.log('index: ' + index);
    console.log('item: ' + item); */

  }

}
