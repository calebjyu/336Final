import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Beer} from './beer.service'

export interface Drinker{
  name: string;
  state: string;
  city: string;
  phone: string;
  addr: string;
}

export interface Transaction{
  id: string;
  bar: string;
}

@Injectable({
  providedIn: 'root'
})

export class DrinkersService {

  constructor( public http: HttpClient ) { }

  getDrinkers(){
    return this.http.get<Drinker[]>('/api/drinker');
  }

  getDrinker(drinker: string){
    return this.http.get<Drinker>('/api/drinker/' + drinker);
  }

  getTransactions(drinker: string){
    return this.http.get<Transaction[]>('/api/transactions/'+drinker);
  }

  getFavoriteBeers(drinker: string){
    return this.http.get<Beer[]>('api/drinker/' +drinker);
  }

}
