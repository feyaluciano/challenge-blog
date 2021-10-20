/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorageAlbumnsService } from './storage-albumns.service';

describe('Service: StorageAlbumns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageAlbumnsService]
    });
  });

  it('should ...', inject([StorageAlbumnsService], (service: StorageAlbumnsService) => {
    expect(service).toBeTruthy();
  }));
});
