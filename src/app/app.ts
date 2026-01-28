import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListFiche } from './features/fiche/components/list-fiche/list-fiche';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListFiche],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
