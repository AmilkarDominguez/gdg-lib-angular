import { TestBed } from '@angular/core/testing';

import { GdgLibService } from './gdg-lib.service';

describe('GdgLibService', () => {
  let service: GdgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
