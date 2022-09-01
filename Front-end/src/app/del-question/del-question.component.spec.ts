import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelQuestionComponent } from './del-question.component';

describe('DelQuestionComponent', () => {
  let component: DelQuestionComponent;
  let fixture: ComponentFixture<DelQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
