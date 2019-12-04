import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeTileComponent } from './date-time-tile.component';

describe('DateTimeTileComponent', () => {
  let component: DateTimeTileComponent;
  let fixture: ComponentFixture<DateTimeTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimeTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
