import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forecast5daysComponent } from './forecast5days.component';

describe('Forecast5daysComponent', () => {
  let component: Forecast5daysComponent;
  let fixture: ComponentFixture<Forecast5daysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forecast5daysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forecast5daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
