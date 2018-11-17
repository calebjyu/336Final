import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BartendersPageComponent } from './bartenders-page/bartenders-page.component';
import { BeersPageComponent } from './beers-page/beers-page.component';
import { DrinkerPageComponent } from './drinker-page/drinker-page.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { ManfPageComponent } from './manf-page/manf-page.component';
import { ManfDetailsComponent } from './manf-details/manf-details.component';
import { ModifyPageComponent } from './modify-page/modify-page.component';
import { QueryPageComponent } from './query-page/query-page.component';
import { BarPageComponent } from './bar-page/bar-page.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BartenderDetailsComponent } from './bartender-details/bartender-details.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: WelcomeComponent
},{
  path: 'static',
  pathMatch: 'full',
  redirectTo: ''
},{
  path: 'bars',
  pathMatch: 'full',
  component: BarPageComponent
},{
  path: 'bars/:bar',
  pathMatch: 'full',
  component: BarDetailsComponent
},{
  path: 'bartenders',
  pathMatch: 'full',
  component: BartendersPageComponent
},{
  path: 'bartenders/:bartender',
  pathMatch: 'full',
  component: BartenderDetailsComponent
},{
  path: 'beers',
  pathMatch: 'full',
  component: BeersPageComponent
},{
  path: 'beers/:beer',
  pathMatch: 'full',
  component: BeerDetailsComponent
},{
  path: 'drinker',
  pathMatch: 'full',
  component: DrinkerPageComponent
},{
  path: 'drinker/:drinker',
  pathMatch: 'full',
  component: DrinkerDetailsComponent
},{
  path: 'manf',
  pathMatch: 'full',
  component: ManfPageComponent
},{
  path: 'manf/:manf',
  pathMatch: 'full',
  component: ManfDetailsComponent
},{
  path: 'modify',
  pathMatch: 'full',
  component: ModifyPageComponent
},{
  path: 'query',
  pathMatch: 'full',
  component: QueryPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
