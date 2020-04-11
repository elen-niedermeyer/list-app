import { TestBed } from '@angular/core/testing';

import { ToDoItemDatabaseService } from './to-do-item-database.service';

describe('ToDoItemDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoItemDatabaseService = TestBed.get(ToDoItemDatabaseService);
    expect(service).toBeTruthy();
  });
});
