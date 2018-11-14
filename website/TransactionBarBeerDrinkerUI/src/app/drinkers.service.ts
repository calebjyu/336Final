import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker{
  name: string;
  state: string;
  city: string;
  phone: string;
  addr: string;
}

@Injectable({
  providedIn: 'root'
})

export class DrinkersService {

  constructor( public http: HttpClient ) { }

  getDrinkers(){
    return this.http.get<Drinker[]>('/api/drinker');
  }

}
