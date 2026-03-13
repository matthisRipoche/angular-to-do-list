import { Component, input, output, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { FicheService } from '../../services/fiche.service';
import { FicheStatus, FicheInterface } from '../../interfaces/fiche.interface';

@Component({
  selector: 'app-fiche-form-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './fiche-form-edit.html',
  styleUrl: './fiche-form-edit.scss',
})
export class FicheFormEdit implements OnInit {
  private fb = inject(NonNullableFormBuilder);

  private ficheService = inject(FicheService);

  fiche = input.required<FicheInterface | null>();

  afterSubmit = output<void>();

  ficheFormEdit = this.fb.group({
    title: ['', [Validators.required]],
    deadline: [new Date().toISOString().split('T')[0]],
    status: ['todo' as FicheStatus],
    description: ['']
  });

  ngOnInit() {
    const f = this.fiche();
    if (f) {
      this.ficheFormEdit.patchValue({
        title: f.title,
        deadline: new Date(f.deadline).toISOString().split('T')[0],
        status: f.status,
        description: f.description || ''
      });
    }
  }

  onSubmit() {
    if (this.ficheFormEdit.invalid) return;

    const f = this.fiche();
    if (f) {
      this.ficheService.updateFiche(f.id, this.ficheFormEdit.getRawValue());
      this.afterSubmit.emit();
    }
  }
}
