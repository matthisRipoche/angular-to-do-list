import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche } from './fiche';

describe('Fiche', () => {
  let component: Fiche;
  let fixture: ComponentFixture<Fiche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fiche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fiche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
