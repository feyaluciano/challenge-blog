/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlbumnsService } from './albumns.service';

describe('Service: Albumns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumnsService]
    });
  });

  it('should ...', inject([AlbumnsService], (service: AlbumnsService) => {
    expect(service).toBeTruthy();
  }));
});
