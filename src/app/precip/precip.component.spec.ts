import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipComponent } from './precip.component';

describe('PrecipComponent', () => {
  let component: PrecipComponent;
  let fixture: ComponentFixture<PrecipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
