import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome';
import { MenuComponent} from './components/menu'

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'menu', component: MenuComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);