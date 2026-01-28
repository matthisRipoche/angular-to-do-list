import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveFiche } from './archive-fiche';

describe('ArchiveFiche', () => {
  let component: ArchiveFiche;
  let fixture: ComponentFixture<ArchiveFiche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveFiche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveFiche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
