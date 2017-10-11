import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDelComponent } from './item-del.component';

describe('ItemDelComponent', () => {
  let component: ItemDelComponent;
  let fixture: ComponentFixture<ItemDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDelComponent ]
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
