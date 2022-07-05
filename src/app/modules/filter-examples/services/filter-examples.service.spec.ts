import { TestBed } from '@angular/core/testing';

import { FilterExamplesService } from './filter-examples.service';

describe('FilterExamplesService', () => {
  let service: FilterExamplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterExamplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
