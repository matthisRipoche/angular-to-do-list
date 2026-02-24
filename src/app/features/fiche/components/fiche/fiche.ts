import { Component, inject, input } from '@angular/core';

import { FicheInterface, FicheStatus } from '../../interfaces/fiche.interface';
import { FicheService } from '../../services/fiche.service';

@Component({
  selector: 'app-fiche',
  imports: [],
  templateUrl: './fiche.html',
  styleUrl: './fiche.scss',
})
export class Fiche {
  ficheService = inject(FicheService);

  fiche = input<FicheInterface>({
    id: 0,
    title: '',
    status: 'todo' as FicheStatus,
    deadline: new Date(),
    description: '',
  });
}
