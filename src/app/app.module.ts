import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ModalModule} from 'ng2-bs4-modal/ng2-bs4-modal';
import { SidebarModule } from 'ng2-sidebar';

import { AppComponent } from './app.component';
import { routing,
         appRoutingProviders }  from './app.routing';

import { ConstantsService } from './services/constants.service';
import { AuthenticationService } from './services/authentication.service';
import { ArticleService } from './services/article.service';

import './rxjs-operators';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { WebshopStatusComponent } from './components/menu/menucards/webshop-status/webshop-status.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    NavBarComponent,
    SideBarComponent, WebshopStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModalModule,
    SidebarModule
  ],
  providers: [appRoutingProviders, AuthenticationService, ArticleService, ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
