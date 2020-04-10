import { TestBed } from '@angular/core/testing';

import { ToDoItemsService } from './to-do-items.service';

describe('ItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoItemsService = TestBed.get(ToDoItemsService);
    expect(service).toBeTruthy();
  });
});
