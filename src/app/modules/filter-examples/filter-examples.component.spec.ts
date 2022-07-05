import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterExamplesComponent } from './filter-examples.component';

describe('FilterExamplesComponent', () => {
  let component: FilterExamplesComponent;
  let fixture: ComponentFixture<FilterExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
