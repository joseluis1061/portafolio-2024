import { TestBed } from '@angular/core/testing';

import { SectionActiveService } from './section-active.service';

describe('SectionActiveService', () => {
  let service: SectionActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
