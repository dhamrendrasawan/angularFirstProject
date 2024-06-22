import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelReactiveFormComponent } from './model-reactive-form.component';

describe('ModelReactiveFormComponent', () => {
  let component: ModelReactiveFormComponent;
  let fixture: ComponentFixture<ModelReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
