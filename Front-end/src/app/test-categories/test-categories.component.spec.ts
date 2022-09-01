import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCategoriesComponent } from './test-categories.component';

describe('TestCategoriesComponent', () => {
  let component: TestCategoriesComponent;
  let fixture: ComponentFixture<TestCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
