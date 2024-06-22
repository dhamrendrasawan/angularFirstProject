import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSub2Component } from './employee-sub2.component';

describe('EmployeeSub2Component', () => {
  let component: EmployeeSub2Component;
  let fixture: ComponentFixture<EmployeeSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSub2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
