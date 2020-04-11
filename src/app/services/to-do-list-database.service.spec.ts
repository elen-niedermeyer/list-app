import { TestBed } from '@angular/core/testing';

import { ToDoListDatabaseService } from './to-do-list-database.service';

describe('ToDoListDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoListDatabaseService = TestBed.get(ToDoListDatabaseService);
    expect(service).toBeTruthy();
  });
});
