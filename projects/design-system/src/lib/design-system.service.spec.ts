import { TestBed } from '@angular/core/testing';

import { DesignSystemService } from './design-system.service';

describe('DesignSystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignSystemService = TestBed.get(DesignSystemService);
    expect(service).toBeTruthy();
  });
});
