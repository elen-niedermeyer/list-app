import { TestBed } from '@angular/core/testing';

import { ToDoListOptionsService } from './to-do-list-options.service';

describe('ToDoListOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoListOptionsService = TestBed.get(ToDoListOptionsService);
    expect(service).toBeTruthy();
  });
});
