import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}