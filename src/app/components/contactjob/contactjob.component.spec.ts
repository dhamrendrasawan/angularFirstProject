import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactjobComponent } from './contactjob.component';

describe('ContactjobComponent', () => {
  let component: ContactjobComponent;
  let fixture: ComponentFixture<ContactjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactjobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
