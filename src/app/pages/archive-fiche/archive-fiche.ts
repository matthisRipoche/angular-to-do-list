import { Component } from '@angular/core';

import { FicheListComponent } from '../../features/fiche/components/fiche-list/fiche-list.component';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-archive-fiche',
  imports: [FicheListComponent, Header],
  templateUrl: './archive-fiche.html',
  styleUrl: './archive-fiche.scss',
})
export class ArchiveFiche {

}
