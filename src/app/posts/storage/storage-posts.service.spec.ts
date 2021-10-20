/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoragePostsService } from './storage-posts.service';

describe('Service: StoragePosts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoragePostsService]
    });
  });

  it('should ...', inject([StoragePostsService], (service: StoragePostsService) => {
    expect(service).toBeTruthy();
  }));
});
