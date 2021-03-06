import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ChildParentService } from '../../../service/child-parent/child-parent.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() offset: number = 3; // Смещение
  @Input() limit: number; // Лимит
  @Input() size: number; // Размер
  @Input() range: number = 6; // Диапазон
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  pages: Observable<number[]>;
  currentPage: number;
  totalPages: number;

  constructor(private childParentService: ChildParentService) { }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }

  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
    this.childParentService.passVariable(this.currentPage);
  }

  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = Observable
      .range(-this.range, this.range * 2 + 1)
      // tslint:disable-next-line:no-shadowed-variable
      .map(offset => this.currentPage + offset)
      .filter(page => this.isValidPageNumber(page, this.totalPages))
      .toArray();
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  selectPage(page: number, event) {
    this.cancelEvent(event);
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit((page - 1) * this.limit);
    }
  }

  cancelEvent(event) {
    event.preventDefault();
  }
}
