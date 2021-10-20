/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorageUsersService } from './storage-users.service';

describe('Service: StorageUsers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageUsersService]
    });
  });

  it('should ...', inject([StorageUsersService], (service: StorageUsersService) => {
    expect(service).toBeTruthy();
  }));
});
