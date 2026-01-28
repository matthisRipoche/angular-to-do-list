import { Component } from '@angular/core';

import { ListFiche } from '../../features/fiche/components/list-fiche/list-fiche';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-archive-fiche',
  imports: [ListFiche, Header],
  templateUrl: './archive-fiche.html',
  styleUrl: './archive-fiche.scss',
})
export class ArchiveFiche {

}
