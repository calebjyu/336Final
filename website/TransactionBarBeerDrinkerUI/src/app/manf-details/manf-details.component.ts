import { Component, OnInit } from '@angular/core';
import { ManfService } from '../manf.service';
import { ActivatedRoute } from '@angular/router';
import {Drinker} from '../drinkers.service'

export interface City{
  name:string;
  amountBeerSold: number;
}

@Component({
  selector: 'app-manf-details',
  templateUrl: './manf-details.component.html',
  styleUrls: ['./manf-details.component.css']
})

export class ManfDetailsComponent implements OnInit {

  manf: string;
  cities: City[];
  drinkers: Drinker[];

  constructor(
    private manfService: ManfService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap => {
      this.manf = paramMap.get('manf');
      manfService.get_cities_sales(this.manf).subscribe(
        data => {
          this.cities = data;
        }
      );
      manfService.where_top_drinkers_of_manf_live(this.manf).subscribe(
        data => {
          this.drinkers = data;
        }
      );
    }))
  }

  ngOnInit() {
  }

}
