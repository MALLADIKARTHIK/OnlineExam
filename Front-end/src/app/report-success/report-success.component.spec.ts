import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSuccessComponent } from './report-success.component';

describe('ReportSuccessComponent', () => {
  let component: ReportSuccessComponent;
  let fixture: ComponentFixture<ReportSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
