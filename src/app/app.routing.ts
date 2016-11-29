import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome';
import { MenuComponent} from './components/menu';
import { WebshopComponent} from './components/webshop';
import { WebshopOrderheadersComponent } from './components/webshop/webshop-orderheaders';
import { OrderDetailComponent } from './components/webshop/order-detail/order-detail.component';
import {CustomerSearchComponent} from './components/customers/customer-search'

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'webshop', component: WebshopComponent},
    { path: 'webshop/orders', component: WebshopOrderheadersComponent},
    { path: 'webshop/order/:id', component: OrderDetailComponent},
    { path: 'customers', component: CustomerSearchComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);