import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';

export const TarefaRoutes: Routes = [
    {
        path: 'tarfas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    }
];