import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drinker } from './drinkers.service';
import { stringify } from '@angular/core/src/util';
import {Base} from './modify-page/modify-page.component'
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
  getFrequents(){
    return this.http.get<Base[]>('/api/frequents');
  }
  getHours(){
    return this.http.get<Base[]>('/api/hours');
  }
  getInventory(){
    return this.http.get<Base[]>('/api/inventory');
  }
  getLikes(){
    return this.http.get<Base[]>('/api/likes');
  }
  getOperates(){
    return this.http.get<Base[]>('/api/operates');
  }
  getPrintedOn(){
    return this.http.get<Base[]>('/api/printed_on');
  }
  getSells(){
    return this.http.get<Base[]>('/api/sells');
  }
  getTransacts(){
    return this.http.get<Base[]>('/api/transacts');
  }
  getWorks(){
    return this.http.get<Base[]>('/api/works');
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
    return this.http.get<string>('/api/deleteDrinker/'+drinker);
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
    return this.http.get<string>('/api/deleteBar/'+name);
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
    return this.http.get<string>('/api/deleteItem/'+name);
  }
  insert_bartender(name:string,bartender_license:string){
    const body = {
      name: name,
      bartender_license: bartender_license
    }
    return this.http.post<string>('/api/addBartender',body);
  }
  delete_bartender(name:string){
    return this.http.get<string>('/api/deleteBartender/'+name);
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
    return this.http.get<string>('/api/deleteBill/'+name);
  }
  insert_frequents(attr1:string,attr2:string){
    const body = {
      attr1: attr1,
      attr2: attr2,
    }
    return this.http.post<string>('/api/addfrequents',body);
  }
  delete_frequents(name:string){
    return this.http.get<string>('/api/deletefrequents/'+name);
  }
  insert_hours(attr1:string,attr2:string,attr3:string,attr4:string){
    const body = {
      attr1: attr1,
      attr2: attr2,
      attr3: attr3,
      attr4:attr4
    }
    return this.http.post<string>('/api/addhours',body);
  }
  delete_hours(name:string){
    return this.http.get<string>('/api/deletehours/'+name);
  }
  insert_inventory(attr1:string,attr2:string,attr3:number,attr4:string){
    const body = {
      attr1: attr1,
      attr2: attr2,
      attr3: attr3,
      attr4: attr4
    }
    return this.http.post<string>('/api/addinventory',body);
  }
  delete_inventory(name:string){
    return this.http.get<string>('/api/deleteinventory/'+name);
  }
  insert_likes(attr1:string,attr2:string){
    const body = {
      attr1: attr1,
      attr2: attr2    }
    return this.http.post<string>('/api/addlikes',body);
  }
  delete_likes(name:string){
    return this.http.get<string>('/api/deletelikes/'+name);
  }
  insert_operates(attr1:string,attr2:string){
    const body = {
      attr1: attr1,
      attr2: attr2    }
    return this.http.post<string>('/api/addoperates',body);
  }
  delete_operates(name:string){
    return this.http.get<string>('/api/deleteoperates/'+name);
  }
  insert_printed_on(attr1:string,attr2:string){
    const body = {
      attr1: attr1,
      attr2: attr2    }
    return this.http.post<string>('/api/addprinted_on',body);
  }
  delete_printed_on(name:string){
    return this.http.get<string>('/api/deleteprinted_on/'+name);
  }
  insert_sells(attr1:string,attr2:string,attr3:number){
    const body = {
      attr1: attr1,
      attr2: attr2,
      attr3: attr3
    }
    return this.http.post<string>('/api/addsells',body);
  }
  delete_sells(name:string){
    return this.http.get<string>('/api/deletesells/'+name);
  }
  insert_transacts(attr1:string,attr2:string,attr3:string){
    const body = {
      attr1: attr1,
      attr2: attr2,
      attr3: attr3
    }
    return this.http.post<string>('/api/addtransacts',body);
  }
  delete_transacts(name:string){
    return this.http.get<string>('/api/deletetransacts/'+name);
  }
  insert_works(attr1:string,attr2:string,attr3:string,attr4:number,attr5:number){
    const body = {
      attr1: attr1,
      attr2: attr2,
      attr3: attr3,
      attr4: attr4,
      attr5: attr5
    }
    return this.http.post<string>('/api/addworks',body);
  }
  delete_works(name:string){
    return this.http.get<string>('/api/deleteworks/'+name);
  }

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
