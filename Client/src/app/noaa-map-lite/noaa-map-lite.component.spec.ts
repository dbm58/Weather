import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoaaMapLiteComponent } from './noaa-map-lite.component';

describe('NoaaMapLiteComponent', () => {
  let component: NoaaMapLiteComponent;
  let fixture: ComponentFixture<NoaaMapLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoaaMapLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoaaMapLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
