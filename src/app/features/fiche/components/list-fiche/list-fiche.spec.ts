import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiche } from './list-fiche';

describe('ListFiche', () => {
  let component: ListFiche;
  let fixture: ComponentFixture<ListFiche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFiche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFiche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
