import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoaaMapComponent } from './noaa-map.component';

describe('NoaaMapComponent', () => {
  let component: NoaaMapComponent;
  let fixture: ComponentFixture<NoaaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoaaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoaaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
