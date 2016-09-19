import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './modules/welcome';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);