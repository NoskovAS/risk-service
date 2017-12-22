import { Component, AfterContentChecked, Input, Output, EventEmitter } from '@angular/core';
import { RiskListService } from '../../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../../service/child-parent/child-parent.service';

@Component({
  selector: 'app-item-del',
  templateUrl: './item-del.component.html',
  styleUrls: ['./item-del.component.css']
})
export class ItemDelComponent implements AfterContentChecked {
  @Input() index; // from item.index
  @Input() items;
  @Input() i; // from table index
  @Input() limit;

  currentPage: number;
  delPerform: boolean = true;

  constructor(
    private riskListService: RiskListService,
    private childParentService: ChildParentService,
  ) { }

  ngAfterContentChecked() {
    this.currentPage = this.childParentService.getVariable();
  }

  riskDelete(index: number = this.index, i: number = this.i) {
    const SerialNumber = {
      index: index,
      uid: localStorage.getItem('uid'),
    };

    // delete risks
    this.riskListService.deleteRisk(SerialNumber).subscribe(data => {
      if (data.success) {
        if (this.currentPage === 1) {
          this.items.splice(i, 1);
        } else {
          this.items.splice(((this.limit * (this.currentPage - 1)) + i), 1);
        }
      }
    });
  }
}
