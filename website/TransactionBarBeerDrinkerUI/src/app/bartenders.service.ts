import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shift } from './bartender-details/bartender-details.component';

export interface Bartender{
  name: string;
  license: string;
}

@Injectable({
  providedIn: 'root'
})
export class BartendersService {

  constructor(public http: HttpClient) { }

  getBartenders(){
    return this.http.get<Bartender[]>('/api/bartender');
  }
  getBartender(bartender:string){
    return this.http.get<Bartender>('/api/bartender/'+bartender);
  }
  get_shifts(bartender:string,bar:string){
    return this.http.get<Shift[]>('/api/bartender/'+bartender+'/'+bar);
  }

}
