import { TestBed } from '@angular/core/testing';

import { WhosaleapiService } from './whosaleapi.service';

describe('WhosaleapiService', () => {
  let service: WhosaleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhosaleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
