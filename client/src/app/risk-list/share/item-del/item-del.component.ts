import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RiskListService } from '../../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../../service/child-parent/child-parent.service';


@Component({
  selector: 'app-item-del',
  templateUrl: './item-del.component.html',
  styleUrls: ['./item-del.component.css']
})
export class ItemDelComponent implements OnInit {
  @Input() index; // from item.index
  @Input() items;
  @Input() i; // from table index

  delPerform: boolean = true;

  constructor(
    private riskListService: RiskListService,
    private childParentService: ChildParentService,
  ) { }

  ngOnInit() {
  }

  foo() {
    console.log('Fooooo!');
  }

  riskDelete(index: number = this.index, i: number = this.i) {
    const SerialNumber = {
      index: index,
      username: localStorage.getItem('username'),
    };

    console.log('I: ' + i + ' ' + SerialNumber.username);
    console.log('Index: ' + SerialNumber.index + ' ' + SerialNumber.username);

    // delete risks
    this.riskListService.deleteRisk(SerialNumber).subscribe(data => {
      if (data.success) {
        this.items.splice(i, 1);
        console.log('Successfull removal');
      } else {
        console.log('Wrong removal');
      }
    });
  }
}
