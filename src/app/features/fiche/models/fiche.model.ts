export type FicheStatus = 'todo' | 'in-progress' | 'done';

export interface Fiche {
    id: number;
    title: string;
    status: FicheStatus;
    deadline: Date;
    description: string;
}

export interface CreateFicheDto {
    title: string;
    status?: FicheStatus;
    deadline: string;
    description: string;
}