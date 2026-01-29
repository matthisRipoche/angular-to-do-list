import { Component, inject, input } from '@angular/core';

import { FicheInterface } from '../../interfaces/fiche.interface';
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
    status: '',
    deadline: new Date(),
    description: '',
  });
}
