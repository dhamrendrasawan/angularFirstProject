import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientCompComponent } from './httpclient-comp.component';

describe('HttpclientCompComponent', () => {
  let component: HttpclientCompComponent;
  let fixture: ComponentFixture<HttpclientCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpclientCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpclientCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
