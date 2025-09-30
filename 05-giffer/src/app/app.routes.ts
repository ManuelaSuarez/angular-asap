import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: 'dashboard',
        async loadComponent() {
            const { DashboardComponent } = await import('@pages/dashboard/dashboard.component')
            return DashboardComponent
        },
        children: [
            {
                path: 'trending',
                loadComponent: () => import('@pages/trending/trending.component').then(c => c.TrendingComponent)
            },
            {
                path: 'search',
                loadComponent: () => import('@pages/search/search.component')
            },
            {
                path: '**',
                redirectTo: 'trending'
            }
        ],
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
]
