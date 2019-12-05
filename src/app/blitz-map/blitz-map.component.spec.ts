import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlitzMapComponent } from './blitz-map.component';

describe('BlitzMapComponent', () => {
  let component: BlitzMapComponent;
  let fixture: ComponentFixture<BlitzMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlitzMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlitzMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
