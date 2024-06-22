import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCurComponent } from './navbar-cur.component';

describe('NavbarCurComponent', () => {
  let component: NavbarCurComponent;
  let fixture: ComponentFixture<NavbarCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarCurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
