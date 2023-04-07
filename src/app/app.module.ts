import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/componentes/home/home.component';
import { HeroesComponent } from './components/componentes/heroes/heroes.component';
import { NosotrosComponent } from './components/componentes/nosotros/nosotros.component';
import { HistoriaComponent } from './components/componentes/historia/historia.component';
import { FooterComponent } from './components/componentes/footer/footer.component';
import { NavbarComponent } from './components/componentes/navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//cards
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    NosotrosComponent,
    HistoriaComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    APP_ROUTING
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
