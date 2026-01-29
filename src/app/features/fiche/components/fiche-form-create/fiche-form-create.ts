import { Component, signal } from '@angular/core';
import { FicheInterface } from '../../interfaces/fiche.interface';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { FicheService } from '../../services/fiche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-form-create',
  imports: [ReactiveFormsModule],
  templateUrl: './fiche-form-create.html',
  styleUrl: './fiche-form-create.scss',
})
export class FicheFormCreate {
  private fb = inject(NonNullableFormBuilder);

  private ficheService = inject(FicheService);

  private router = inject(Router);

  ficheForm = this.fb.group({
    title: ['', [Validators.required]],
    deadline: [new Date().toISOString().split('T')[0]],
    status: ['En cours' as const],
    description: ['']
  });

  onSubmit() {
    const rawValue = this.ficheForm.getRawValue();

    const nouvelleFiche: FicheInterface = {
      ...rawValue,
      id: Date.now(),
      deadline: new Date(rawValue.deadline)
    };

    this.ficheService.addFiche(nouvelleFiche);
    this.router.navigate(['/']);
  }

}
