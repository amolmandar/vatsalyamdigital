import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatsalyamYearDataComponent } from './vatsalyam-year-data.component';

describe('VatsalyamYearDataComponent', () => {
  let component: VatsalyamYearDataComponent;
  let fixture: ComponentFixture<VatsalyamYearDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatsalyamYearDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VatsalyamYearDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
