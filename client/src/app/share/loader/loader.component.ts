import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, AfterContentChecked {
  public currentValue: number = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentValue++;
    }, 10);
  }

  ngAfterContentChecked() {
  }

}
