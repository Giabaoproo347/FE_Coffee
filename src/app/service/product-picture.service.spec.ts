import { TestBed } from '@angular/core/testing';

import { ProductPictureService } from './productPicture.service';

describe('ProductPictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductPictureService = TestBed.get(ProductPictureService);
    expect(service).toBeTruthy();
  });
});
