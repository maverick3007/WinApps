import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ModalModule} from 'ng2-bs4-modal/ng2-bs4-modal';
import { SidebarModule } from 'ng2-sidebar';

import { AppComponent } from './app.component';
import { routing,
         appRoutingProviders }  from './app.routing';

import { ConstantsService } from './services/constants.service';
import { AuthenticationService } from './services/authentication.service';
import { ArticleService } from './services/article.service';
import { WebshopService } from './services/webshop.service';
import { CustomerService} from './services/customer.service';
import { AuthGuardService } from './services/auth-guard.service';

import './rxjs-operators';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { WebshopStatusComponent } from './components/menu/menucards/webshop-status/webshop-status.component';
import { WebshopComponent } from './components/webshop/webshop.component';
import { WebshopOrderheadersComponent } from './components/webshop/webshop-orderheaders/webshop-orderheaders.component';
import { DatenumberPipe } from './pipes/datenumber.pipe';
import { OrderDetailComponent } from './components/webshop/order-detail/order-detail.component';
import { CustomerSearchComponent } from './components/customers/customer-search/customer-search.component';
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    NavBarComponent,
    SideBarComponent, WebshopStatusComponent, WebshopComponent, WebshopOrderheadersComponent, DatenumberPipe, OrderDetailComponent, CustomerSearchComponent, CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    routing,
    ModalModule,
    SidebarModule
  ],
  providers: [appRoutingProviders, AuthenticationService, ArticleService, ConstantsService, WebshopService, CustomerService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
