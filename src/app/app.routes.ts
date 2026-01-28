import { Routes } from '@angular/router';

import { ArchiveFiche } from './pages/archive-fiche/archive-fiche';
import { CreateFiche } from './pages/create-fiche/create-fiche';

export const routes: Routes = [
    {
        path: '',
        component: ArchiveFiche,
    },
    {
        path: 'create',
        component: CreateFiche,
    },
];
