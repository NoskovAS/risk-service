import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  @Input() index; // from item.index
  @Input() items;
  @Input() i; // from table index
  @Output() editRow: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  riskEdit(index: number = this.index, i: number = this.i, items = [] = this.items) {
    this.editRow.emit(index);
    return this.items.i;
  }

}
