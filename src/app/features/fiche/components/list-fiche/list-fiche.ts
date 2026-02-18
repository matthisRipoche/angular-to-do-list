import { Component, inject, computed } from '@angular/core';

import { Fiche } from '../fiche/fiche';
import { FicheService } from '../../services/fiche.service';
import { signal } from '@angular/core';

@Component({
  selector: 'app-list-fiche',
  imports: [Fiche],
  templateUrl: './list-fiche.html',
  styleUrl: './list-fiche.scss',
})
export class ListFiche {
  private ficheService = inject(FicheService);
  listeFiche = this.ficheService.listeFiche;

  fichesToDo = computed(() => this.listeFiche().filter(fiche => fiche.status === 'todo'));
  fichesInProgress = computed(() => this.listeFiche().filter(fiche => fiche.status === 'in-progress'));
  fichesDone = computed(() => this.listeFiche().filter(fiche => fiche.status === 'done'));
}
