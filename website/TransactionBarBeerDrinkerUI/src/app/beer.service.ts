import { Injectable } from '@angular/core';
import {Drinker} from './drinkers.service'

import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

export interface Beer{
  name: string;
  attr: string;
}

export interface BeerLocation{
  bar: string;
  price: number;
}

export interface Time{
  hour:string;
  amount:number;
}

export interface Item{
  name: string;
  type: string;
  attr: string;
}

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor( public http: HttpClient )
  { }

  getBarsSelling(beer: string){
    return this.http.get<BeerLocation[]>('/api/bars-selling/' + beer);
  }

  getBeers(){
    return this.http.get<Beer[]>('/api/beer');
  }

  getItems(){
    return this.http.get<Item[]>('/api/items');
  }

  getBeer(beer: string){
    return this.http.get<Beer>('/api/beer/' + beer);
  }

  where_beer_is_sold_most(beer:string){
    return this.http.get<BeerLocation[]>("/api/beer/sold_most/" + beer);
  }

  who_drinks_beer_most(beer){
    return this.http.get<Drinker[]>('/api/beer/drinks_most/'+beer);
  }
  
  get_when_is_beer_consumed_most(beer){
    return this.http.get<Time[]>('/api/beer/time/'+beer);
  }

}
