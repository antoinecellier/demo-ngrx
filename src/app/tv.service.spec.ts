import { TestBed, inject } from '@angular/core/testing';

import { TVService } from './tv.service';

describe('TVService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TVService]
    });
  });

  it('should be created', inject([TVService], (service: TVService) => {
    expect(service).toBeTruthy();
  }));
});
