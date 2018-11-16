import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

export interface Bar{
  name: string;
  license: string;
  city: string;
  phone: string;
  addr: string;
}

export interface BarMenuItem{
  name: string;
  type: string;
  attr: string;
}

export interface largestSpenders{
  drinker: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor( public http: HttpClient )
  { }

  getBars(){
    return this.http.get<Bar[]>('/api/bar');
  }

  getBar(bar: string){
    return this.http.get<Bar>('/api/bar/' + bar);
  }

  getMenu(bar: string){
    return this.http.get<BarMenuItem[]>('/api/menu/'+bar);
  }

  getLargestSpenders(bar: string){
    return this.http.get<largestSpenders[]>('/api/bar/spend/'+bar);
  }
}
