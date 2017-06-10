import { TestBed, inject } from '@angular/core/testing';

import { WallService } from './wall.service';

describe('WallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WallService]
    });
  });

  it('should be created', inject([WallService], (service: WallService) => {
    expect(service).toBeTruthy();
  }));
});
