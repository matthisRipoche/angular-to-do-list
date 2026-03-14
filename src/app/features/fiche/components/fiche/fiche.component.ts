import { Component, inject, input } from '@angular/core';

import { Fiche, FicheStatus } from '../../models/fiche.model';
import { FicheService } from '../../services/fiche.service';

@Component({
  selector: 'app-fiche',
  imports: [],
  templateUrl: './fiche.component.html',
  styleUrl: './fiche.component.scss',
})
export class FicheComponent {
  ficheService = inject(FicheService);

  fiche = input<Fiche>({
    id: 0,
    title: '',
    status: 'todo' as FicheStatus,
    deadline: new Date(),
    description: '',
  });

  toggleModalEdit() {
    this.ficheService.openEditModal(this.fiche());
  }
}
