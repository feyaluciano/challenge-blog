/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoragePhotosService } from './storage-photos.service';

describe('Service: StoragePhotos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoragePhotosService]
    });
  });

  it('should ...', inject([StoragePhotosService], (service: StoragePhotosService) => {
    expect(service).toBeTruthy();
  }));
});
