import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing,
         appRoutingProviders }  from './app.routing';

import { AuthenticationService } from './services/authentication.service';
import './rxjs-operators';
import { WelcomeComponent } from './modules/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
