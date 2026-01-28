import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFiche } from './edit-fiche';

describe('EditFiche', () => {
  let component: EditFiche;
  let fixture: ComponentFixture<EditFiche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFiche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFiche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
