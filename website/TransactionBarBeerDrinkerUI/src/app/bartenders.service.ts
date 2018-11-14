import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
