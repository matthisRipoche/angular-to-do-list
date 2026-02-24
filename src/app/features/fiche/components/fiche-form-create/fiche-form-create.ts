import { Component, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { FicheService } from '../../services/fiche.service';
import { FicheStatus } from '../../interfaces/fiche.interface';

@Component({
  selector: 'app-fiche-form-create',
  imports: [ReactiveFormsModule],
  templateUrl: './fiche-form-create.html',
  styleUrl: './fiche-form-create.scss',
})
export class FicheFormCreate {
  private fb = inject(NonNullableFormBuilder);

  private ficheService = inject(FicheService);

  afterSubmit = output<void>();

  ficheForm = this.fb.group({
    title: ['', [Validators.required]],
    deadline: [new Date().toISOString().split('T')[0]],
    status: ['todo' as FicheStatus],
    description: ['']
  });

  onSubmit() {
    if (this.ficheForm.invalid) return;

    this.ficheService.createFiche(this.ficheForm.getRawValue());

    this.afterSubmit.emit();
    this.ficheForm.reset({
      deadline: new Date().toISOString().split('T')[0],
      status: 'todo'
    });
  }
}
