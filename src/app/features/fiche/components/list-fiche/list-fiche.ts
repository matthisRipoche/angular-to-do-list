import { Component } from '@angular/core';

import { FicheInterface } from '../../interfaces/fiche.interface';
import { Fiche } from '../fiche/fiche';
import { signal } from '@angular/core';

@Component({
  selector: 'app-list-fiche',
  imports: [Fiche],
  templateUrl: './list-fiche.html',
  styleUrl: './list-fiche.scss',
})
export class ListFiche {
  listeFiche = signal<FicheInterface[]>([]);

  constructor() {
    this.listeFiche.set([
      {
        id: 1,
        title: 'Titre de la fiche',
        status: 'En cours',
        deadline: new Date(),
        description: 'Description de la fiche',
      },
    ]);
  }

}
