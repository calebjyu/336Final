import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drinker } from './drinkers.service';
import { stringify } from '@angular/core/src/util';

export interface Bill{
  transaction_id: string;
  time: string;
  date: string;
  subtotal: number;
  tip: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})



export class ModifyService {

  constructor(public http: HttpClient) { }

  getBills(){
    return this.http.get<Bill[]>('/api/bills');
  }

  insert_drinker(name:string,state:string,city:string,phone:string,address:string){
    const body = {
      name: name,
      state: state,
      city: city,
      phone: phone,
      address: address
    }
    return this.http.post<string>('/api/addDrinker',body);
  }

  delete_drinker(drinker:string){
    return this.http.get<string>('api/deleteDrinker/'+drinker);
  }

  drinker_exists(name: string){
    console.log(this.http.get<string>('/api/drinker/'+name))
    if(this.http.get<string>('/api/drinker/'+name)){
      return true
    }else{
      return false;
    }
  }

}
