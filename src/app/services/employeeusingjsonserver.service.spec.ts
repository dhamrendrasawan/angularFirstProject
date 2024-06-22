import { TestBed } from '@angular/core/testing';

import { EmployeeusingjsonserverService } from './employeeusingjsonserver.service';

describe('EmployeeusingjsonserverService', () => {
  let service: EmployeeusingjsonserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeusingjsonserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
