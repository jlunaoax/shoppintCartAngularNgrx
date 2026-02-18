import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponentV2 } from './cart.component-v2';

describe('CartComponentV2', () => {
  let component: CartComponentV2;
  let fixture: ComponentFixture<CartComponentV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponentV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponentV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
