export type FicheStatus = 'todo' | 'in-progress' | 'done';

export interface FicheInterface {
    id: number;
    title: string;
    status: FicheStatus;
    deadline: Date;
    description: string;
}

export interface CreateFicheDto {
    title: string;
    deadline: string;
    description: string;
    status?: FicheStatus;
}
