import { TestBed } from '@angular/core/testing';

import { EmployeeserviceSubService } from './employeeservice-sub.service';

describe('EmployeeserviceSubService', () => {
  let service: EmployeeserviceSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeserviceSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
