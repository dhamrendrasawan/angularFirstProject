import { TestBed } from '@angular/core/testing';

import { SubjectServiceTodoService } from './subject-service-todo.service';

describe('SubjectServiceTodoService', () => {
  let service: SubjectServiceTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectServiceTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
