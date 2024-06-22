import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentjobComponent } from './permanentjob.component';

describe('PermanentjobComponent', () => {
  let component: PermanentjobComponent;
  let fixture: ComponentFixture<PermanentjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentjobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
