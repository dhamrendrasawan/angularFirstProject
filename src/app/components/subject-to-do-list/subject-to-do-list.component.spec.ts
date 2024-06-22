import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectToDoListComponent } from './subject-to-do-list.component';

describe('SubjectToDoListComponent', () => {
  let component: SubjectToDoListComponent;
  let fixture: ComponentFixture<SubjectToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectToDoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
