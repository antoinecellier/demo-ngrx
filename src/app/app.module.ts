import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'

import { TVService } from './tv.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TvCardComponent } from './tv-card/tv-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TvCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TVService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
