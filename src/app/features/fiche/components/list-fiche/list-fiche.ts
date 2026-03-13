import { Component, inject, computed } from '@angular/core';

import { Fiche } from '../fiche/fiche';
import { FicheService } from '../../services/fiche.service';
import { FicheFormCreate } from '../fiche-form-create/fiche-form-create';
import { FicheFormEdit } from '../fiche-form-edit/fiche-form-edit';

@Component({
  selector: 'app-list-fiche',
  imports: [Fiche, FicheFormCreate, FicheFormEdit],
  templateUrl: './list-fiche.html',
  styleUrl: './list-fiche.scss',
})
export class ListFiche {
  private ficheService = inject(FicheService);
  listeFiche = this.ficheService.listeFiche;

  isModalCreateOpen = this.ficheService.isModalCreateOpen;
  isModalEditOpen = this.ficheService.isModalEditOpen;
  ficheToEdit = this.ficheService.ficheToEdit;

  fichesToDo = computed(() => this.listeFiche().filter(fiche => fiche.status === 'todo'));
  fichesInProgress = computed(() => this.listeFiche().filter(fiche => fiche.status === 'in-progress'));
  fichesDone = computed(() => this.listeFiche().filter(fiche => fiche.status === 'done'));

  toggleModalCreate() {
    this.isModalCreateOpen.set(!this.isModalCreateOpen());
  }

  closeEditModal() {
    this.ficheService.closeEditModal();
  }
}
