import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Pour pouvoir utiliser le Two ways binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
