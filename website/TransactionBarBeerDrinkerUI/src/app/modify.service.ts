import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drinker } from './drinkers.service';
import { stringify } from '@angular/core/src/util';
declare var require: any

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
  insert_bar(name:string,license:string,state:string,city:string,phone:string,address:string){
    const body = {
      name: name,
      license: license,
      state: state,
      city: city,
      phone: phone,
      address: address
    }
    return this.http.post<string>('/api/addBar',body);
  }
  delete_bar(name:string){
    return this.http.get<string>('api/deleteBar/'+name);
  }
  insert_item(name:string,type:string, attr:string){
    const body = {
      name: name,
      type: type,
      attr: attr,
    }
    return this.http.post<string>('/api/addItem',body);
  }
  delete_item(name:string){
    return this.http.get<string>('api/deleteItem/'+name);
  }
  insert_bartender(name:string,bartender_license:string){
    const body = {
      name: name,
      bartender_license: bartender_license
    }
    return this.http.post<string>('/api/addBartender',body);
  }
  delete_bartender(name:string){
    return this.http.get<string>('api/deleteBartender/'+name);
  }
  insert_bill(transaction_id:string,time:string,date:string,subtotal:number,tip:number,total:number){
    const body = {
      transaction_id: transaction_id,
      time:time,
      date:date,
      subtotal:subtotal,
      tip:tip,
      total:total
    }
    return this.http.post<string>('/api/addBill',body);
  }
  delete_bill(name:string){
    return this.http.get<string>('api/deleteBill/'+name);
  }
  /*insert_(name:string,state:string,city:string,phone:string,address:string){
    const body = {
      name: name,
      state: state,
      city: city,
      phone: phone,
      address: address
    }
    return this.http.post<string>('/api/add',body);
  }
  delete_(name:string){
    return this.http.get<string>('api/delete/'+name);
  }*/

  exists(name: string, path:string){
    //var res = false;
    /*var urlExists = require('url-exists');
    urlExists('/api/drinker/', function(err,exists){
      console.log(exists)
      res = exists;
    });*/
    console.log(this.http.get<Boolean>(path+name));
    return this.http.get<Boolean>(path+name);
  }

}
