import { Component, inject, computed, signal } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

import { Fiche } from '../fiche/fiche';
import { FicheService } from '../../services/fiche.service';
import { FicheFormCreate } from '../fiche-form-create/fiche-form-create';

@Component({
  selector: 'app-list-fiche',
  imports: [Fiche, CdkDrag, FicheFormCreate],
  templateUrl: './list-fiche.html',
  styleUrl: './list-fiche.scss',
})
export class ListFiche {
  private ficheService = inject(FicheService);
  listeFiche = this.ficheService.listeFiche;

  isModalOpen = this.ficheService.isModalOpen;

  fichesToDo = computed(() => this.listeFiche().filter(fiche => fiche.status === 'todo'));
  fichesInProgress = computed(() => this.listeFiche().filter(fiche => fiche.status === 'in-progress'));
  fichesDone = computed(() => this.listeFiche().filter(fiche => fiche.status === 'done'));

  toggleModal() {
    this.isModalOpen.set(!this.isModalOpen());
  }
}
