import { Component, input, signal } from '@angular/core';

import { FicheInterface } from '../../interfaces/fiche.interface';

@Component({
  selector: 'app-fiche',
  imports: [],
  templateUrl: './fiche.html',
  styleUrl: './fiche.scss',
})
export class Fiche {
  fiche = input<FicheInterface>({
    id: 0,
    title: '',
    status: '',
    deadline: new Date(),
    description: '',
  });

  
}
