import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'planner', pathMatch: 'full' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });
