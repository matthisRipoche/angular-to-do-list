import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFiche } from './create-fiche';

describe('CreateFiche', () => {
  let component: CreateFiche;
  let fixture: ComponentFixture<CreateFiche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFiche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFiche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
