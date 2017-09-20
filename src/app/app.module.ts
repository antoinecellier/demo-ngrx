import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'

import { apiKey } from '../environments/config'

import { TVService } from './tv.service'
import { CastingService } from './casting.service'
import { StatefulService } from './stateful.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TvCardComponent } from './tv-card/tv-card.component';
import { CastingComponent } from './casting/casting.component';

import { SelectPipe } from './pipes/get.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TvCardComponent,
    CastingComponent,
    SelectPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TVService,
    CastingService,
    StatefulService,
    { provide: 'apiKey', useValue: apiKey }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
