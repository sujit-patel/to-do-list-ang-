import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./MyComponents/todos/todos.component').then((m) => m.TodosComponent),
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./MyComponents/about/about.component').then((m) => m.AboutComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
