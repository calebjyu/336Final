import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BartendersPageComponent } from './bartenders-page/bartenders-page.component';
import { BeersPageComponent } from './beers-page/beers-page.component';
import { DrinkerPageComponent } from './drinker-page/drinker-page.component';
import { ManfPageComponent } from './manf-page/manf-page.component';
import { ModifyPageComponent } from './modify-page/modify-page.component';
import { QueryPageComponent } from './query-page/query-page.component';
import { BarPageComponent } from './bar-page/bar-page.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: WelcomeComponent
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
  path: 'beers',
  pathMatch: 'full',
  component: BeersPageComponent
},{
  path: 'drinker',
  pathMatch: 'full',
  component: DrinkerPageComponent
},{
  path: 'manf',
  pathMatch: 'full',
  component: ManfPageComponent
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
