import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamUiComponent } from './exam-ui.component';

describe('ExamUiComponent', () => {
  let component: ExamUiComponent;
  let fixture: ComponentFixture<ExamUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
