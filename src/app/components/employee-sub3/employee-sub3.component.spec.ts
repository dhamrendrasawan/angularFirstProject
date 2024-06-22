import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSub3Component } from './employee-sub3.component';

describe('EmployeeSub3Component', () => {
  let component: EmployeeSub3Component;
  let fixture: ComponentFixture<EmployeeSub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSub3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
