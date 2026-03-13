import { Injectable, signal } from '@angular/core';
import { FicheInterface, CreateFicheDto } from '../interfaces/fiche.interface';

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

  isModalCreateOpen = signal(false);
  isModalEditOpen = signal(false);
  ficheToEdit = signal<FicheInterface | null>(null);

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

  openEditModal(fiche: FicheInterface) {
    this.ficheToEdit.set(fiche);
    this.isModalEditOpen.set(true);
  }

  closeEditModal() {
    this.isModalEditOpen.set(false);
    this.ficheToEdit.set(null);
  }

  updateFiche(id: number, dto: Partial<CreateFicheDto>) {
    this._listFiche.update((list) =>
      list.map((fiche) =>
        fiche.id === id
          ? { ...fiche, ...dto, deadline: dto.deadline ? new Date(dto.deadline) : fiche.deadline }
          : fiche
      )
    );
  }

  deleteFiche(id: number) {
    this._listFiche.update((list) => list.filter((fiche) => fiche.id !== id));
  }
}
