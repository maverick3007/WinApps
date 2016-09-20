import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './modules/welcome';
import { MenuComponent} from './modules/menu'

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'menu', component: MenuComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);