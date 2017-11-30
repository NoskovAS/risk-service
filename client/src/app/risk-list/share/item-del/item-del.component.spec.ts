import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDelComponent } from './item-del.component';
import { RiskListService } from '../../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../../service/child-parent/child-parent.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemDelComponent', () => {
  let component: ItemDelComponent;
  let fixture: ComponentFixture<ItemDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ItemDelComponent],
      providers: [RiskListService, ChildParentService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
