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

  // On définit le type du formulaire basé sur l'interface (moins l'ID)
  ficheForm = this.fb.group({
    title: ['', [Validators.required]],
    deadline: [new Date().toISOString().split('T')[0]],
    status: ['En cours' as const],
    description: ['']
  });

  onSubmit() {
    // Ici, rawValue correspond exactement à FicheInterface sans l'ID
    const rawValue = this.ficheForm.getRawValue();

    // On ajoute l'ID au moment de l'envoi au service
    const nouvelleFiche: FicheInterface = {
      ...rawValue,
      id: Date.now(), // Génération temporaire
      deadline: new Date(rawValue.deadline)
    };

    this.ficheService.addFiche(nouvelleFiche);
    this.router.navigate(['/']);
  }

}
