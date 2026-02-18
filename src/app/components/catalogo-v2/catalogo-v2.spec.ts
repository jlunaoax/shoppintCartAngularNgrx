import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoV2 } from './catalogo-v2';

describe('CatalogoV2', () => {
  let component: CatalogoV2;
  let fixture: ComponentFixture<CatalogoV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
