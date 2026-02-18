import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAppComponentV2 } from './cart-app.component-v2';

describe('CartAppComponentV2', () => {
  let component: CartAppComponentV2;
  let fixture: ComponentFixture<CartAppComponentV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartAppComponentV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartAppComponentV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
