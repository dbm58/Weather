import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBusTileComponent } from './next-bus-tile.component';

describe('NextBusTileComponent', () => {
  let component: NextBusTileComponent;
  let fixture: ComponentFixture<NextBusTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextBusTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextBusTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
