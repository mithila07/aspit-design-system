import { TestBed, inject } from '@angular/core/testing';

import { AspitCssLibService } from './design-system.service';

describe('AspitCssLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AspitCssLibService]
    });
  });

  it('should be created', inject([AspitCssLibService], (service: AspitCssLibService) => {
    expect(service).toBeTruthy();
  }));
});
