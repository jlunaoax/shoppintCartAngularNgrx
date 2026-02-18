import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarV2 } from './navbar-v2';

describe('NavbarV2', () => {
  let component: NavbarV2;
  let fixture: ComponentFixture<NavbarV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
