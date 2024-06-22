import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectToDoAddComponent } from './subject-to-do-add.component';

describe('SubjectToDoAddComponent', () => {
  let component: SubjectToDoAddComponent;
  let fixture: ComponentFixture<SubjectToDoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectToDoAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectToDoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
