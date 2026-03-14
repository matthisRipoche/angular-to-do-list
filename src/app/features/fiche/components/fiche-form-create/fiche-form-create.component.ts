import { Component, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { FicheService } from '../../services/fiche.service';
import { FicheStatus } from '../../models/fiche.model';

@Component({
  selector: 'app-fiche-form-create',
  imports: [ReactiveFormsModule],
  templateUrl: './fiche-form-create.component.html',
  styleUrl: './fiche-form-create.component.scss',
})
export class FicheFormCreateComponent {
  private fb = inject(NonNullableFormBuilder);

  private ficheService = inject(FicheService);

  afterSubmit = output<void>();

  ficheFormCreate = this.fb.group({
    title: ['', [Validators.required]],
    deadline: [new Date().toISOString().split('T')[0]],
    status: ['todo' as FicheStatus],
    description: ['']
  });

  onSubmit() {
    if (this.ficheFormCreate.invalid) return;

    this.ficheService.createFiche(this.ficheFormCreate.getRawValue());

    this.afterSubmit.emit();
    this.ficheFormCreate.reset({
      deadline: new Date().toISOString().split('T')[0],
      status: 'todo'
    });
  }
}
