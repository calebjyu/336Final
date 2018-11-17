import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule, Button} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { DrinkerPageComponent } from './drinker-page/drinker-page.component';
import { BeersPageComponent } from './beers-page/beers-page.component';
import { BartendersPageComponent } from './bartenders-page/bartenders-page.component';
import { ManfPageComponent } from './manf-page/manf-page.component';
import { QueryPageComponent } from './query-page/query-page.component';
import { ModifyPageComponent } from './modify-page/modify-page.component';
import { BarPageComponent } from './bar-page/bar-page.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { ManfDetailsComponent } from './manf-details/manf-details.component';
import { BartenderDetailsComponent } from './bartender-details/bartender-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    DrinkerPageComponent,
    BeersPageComponent,
    BartendersPageComponent,
    ManfPageComponent,
    QueryPageComponent,
    ModifyPageComponent,
    BarPageComponent,
    DrinkerDetailsComponent,
    BeerDetailsComponent,
    ManfDetailsComponent,
    BartenderDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
