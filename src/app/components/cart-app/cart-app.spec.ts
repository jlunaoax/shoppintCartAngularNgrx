import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartApp } from './cart-app';

describe('CartApp', () => {
  let component: CartApp;
  let fixture: ComponentFixture<CartApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
