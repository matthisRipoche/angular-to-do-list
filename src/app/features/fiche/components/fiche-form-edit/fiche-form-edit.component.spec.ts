import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheFormEdit } from './fiche-form-edit';

describe('FicheFormEdit', () => {
  let component: FicheFormEdit;
  let fixture: ComponentFixture<FicheFormEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheFormEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheFormEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
