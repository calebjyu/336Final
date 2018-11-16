import { Injectable } from '@angular/core';

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

  getBeer(beer: string){
    return this.http.get<Beer>('/api/beer/' + beer);
  }
}
