import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome';
import { MenuComponent} from './components/menu';
import { WebshopComponent} from './components/webshop';
import { WebshopOrderheadersComponent } from './components/webshop/webshop-orderheaders';
import { OrderDetailComponent } from './components/webshop/order-detail/order-detail.component';
import {CustomerSearchComponent} from './components/customers/customer-search';
import {CustomerDetailComponent} from './components/customers/customer-detail';

import {AuthGuardService} from './services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'menu', component: MenuComponent, canActivate: [AuthGuardService] },
    { path: 'webshop', component: WebshopComponent, canActivate: [AuthGuardService]},
    { path: 'webshop/orders', component: WebshopOrderheadersComponent, canActivate: [AuthGuardService]},
    { path: 'webshop/order/:id', component: OrderDetailComponent, canActivate: [AuthGuardService]},
    { path: 'customers', component: CustomerSearchComponent, canActivate: [AuthGuardService]},
    { path: 'customers/detail/:id', component: CustomerDetailComponent, canActivate:[AuthGuardService]}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);