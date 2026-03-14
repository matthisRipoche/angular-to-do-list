import { Component, inject, computed } from '@angular/core';

import { FicheComponent } from '../fiche/fiche.component';
import { FicheService } from '../../services/fiche.service';
import { FicheFormCreateComponent } from '../fiche-form-create/fiche-form-create.component';
import { FicheFormEditComponent } from '../fiche-form-edit/fiche-form-edit.component';

@Component({
  selector: 'app-fiche-list',
  imports: [FicheComponent, FicheFormCreateComponent, FicheFormEditComponent],
  templateUrl: './fiche-list.component.html',
  styleUrl: './fiche-list.component.scss',
})
export class FicheListComponent {
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
