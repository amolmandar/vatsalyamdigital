import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfbodyComponent } from './pdfbody.component';

describe('PdfbodyComponent', () => {
  let component: PdfbodyComponent;
  let fixture: ComponentFixture<PdfbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
