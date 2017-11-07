import { TestBed, inject } from '@angular/core/testing';

import { TextSearchService } from './text-search.service';

describe('TextSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextSearchService]
    });
  });

  it('should ...', inject([TextSearchService], (service: TextSearchService) => {
    expect(service).toBeTruthy();
  }));
});
