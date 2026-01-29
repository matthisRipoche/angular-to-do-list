import { Injectable, signal } from '@angular/core';
import { FicheInterface } from '../interfaces/fiche.interface';

@Injectable({
  providedIn: 'root',
})
export class FicheService {
  private _listFiche = signal<FicheInterface[]>([
    {
      id: 1,
      title: 'Titre de la fiche',
      status: 'todo',
      deadline: new Date(),
      description: 'Description de la fiche',
    }
  ]);

  listeFiche = this._listFiche.asReadonly();

  constructor(){}

  addFiche(fiche: FicheInterface){
    this._listFiche.update((list) => [...list, fiche]);
  }

  deleteFiche(id: number) {
    this._listFiche.update((list) => list.filter((fiche) => fiche.id !== id));
  }
}
