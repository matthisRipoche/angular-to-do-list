import { Component } from '@angular/core';

import { Header } from '../../components/header/header';
import { FicheFormCreate } from '../../features/fiche/components/fiche-form-create/fiche-form-create';

@Component({
  selector: 'app-create-fiche',
  imports: [Header, FicheFormCreate],
  templateUrl: './create-fiche.html',
  styleUrl: './create-fiche.scss',
})
export class CreateFiche {

}
