import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {City} from './manf-details/manf-details.component'
import {Drinker} from './drinkers.service'

export interface Manf{
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ManfService {

  constructor( public http: HttpClient )
  { }

  getManfs(){
    return this.http.get<Manf[]>('/api/manf');
  }

  getManf(manf: string){
    return this.http.get<Manf>('/api/manf/' + manf);
  }

  get_cities_sales(manf: string){
    return this.http.get<City[]>('/api/manf/cities/' + manf);
  }

  where_top_drinkers_of_manf_live(manf:string){
    return this.http.get<Drinker[]>('/api/manf/live/'+manf);
  }
}