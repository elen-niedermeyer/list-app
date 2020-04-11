import { TestBed } from '@angular/core/testing';

import { ToDoItemOptionsService } from './services/to-do-item-options.service';

describe('ToDoItemOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoItemOptionsService = TestBed.get(ToDoItemOptionsService);
    expect(service).toBeTruthy();
  });
});
