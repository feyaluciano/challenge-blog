/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorageTodosService } from './storage-todos.service';

describe('Service: StorageTodos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageTodosService]
    });
  });

  it('should ...', inject([StorageTodosService], (service: StorageTodosService) => {
    expect(service).toBeTruthy();
  }));
});
