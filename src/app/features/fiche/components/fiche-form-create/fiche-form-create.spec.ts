import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheFormCreate } from './fiche-form-create';

describe('FicheFormCreate', () => {
  let component: FicheFormCreate;
  let fixture: ComponentFixture<FicheFormCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheFormCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheFormCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
