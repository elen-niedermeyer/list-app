import { TestBed } from '@angular/core/testing';

import { ListsService } from './lists.service';

describe('ListsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListsService = TestBed.get(ListsService);
    expect(service).toBeTruthy();
  });
});
