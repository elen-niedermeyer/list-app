import { TestBed } from '@angular/core/testing';

import { ToDoListsService } from './to-do-lists.service';

describe('ListsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoListsService = TestBed.get(ToDoListsService);
    expect(service).toBeTruthy();
  });
});
