import { Injectable, signal } from '@angular/core';
import { FicheInterface, FicheStatus, CreateFicheDto } from '../interfaces/fiche.interface';

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

  isModalOpen = signal(false);

  listeFiche = this._listFiche.asReadonly();

  constructor() { }

  createFiche(dto: CreateFicheDto) {
    const nouvelleFiche: FicheInterface = {
      ...dto,
      status: dto.status || 'todo',
      id: Date.now(),
      deadline: new Date(dto.deadline)
    };

    this.addFiche(nouvelleFiche);
  }

  addFiche(fiche: FicheInterface) {
    this._listFiche.update((list) => [...list, fiche]);
  }

  deleteFiche(id: number) {
    this._listFiche.update((list) => list.filter((fiche) => fiche.id !== id));
  }
}
