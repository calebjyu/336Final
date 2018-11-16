import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker{
  name: string;
  state: string;
  city: string;
  phone: string;
  addr: string;
}

export interface Transaction{
  transaction_id: string;
  bar: string;
  time: string;
  date: string;
}

export interface favBeer{
  item: string;
  count: number;
}

export interface spends{
  total: string;
  bar: string;
  date: string;
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
    return this.http.get<favBeer[]>('api/drinker/drinker/' +drinker);
  }

  getDrinkerSpend(drinker: string){
    return this.http.get<spends[]>('api/drinker/spends/' +drinker);
  }

}
