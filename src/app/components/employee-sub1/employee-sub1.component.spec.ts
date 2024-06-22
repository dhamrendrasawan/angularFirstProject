import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSub1Component } from './employee-sub1.component';

describe('EmployeeSub1Component', () => {
  let component: EmployeeSub1Component;
  let fixture: ComponentFixture<EmployeeSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSub1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
