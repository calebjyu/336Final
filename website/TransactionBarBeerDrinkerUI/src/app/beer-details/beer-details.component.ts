import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BeerService, Beer, BeerLocation} from '../beer.service';
import { HttpResponse } from '@angular/common/http';

import {SelectItem} from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;
  beerLocations: BeerLocation[];
  manufacturer: string;

  filterOptions: SelectItem[];
  sortField: string;
  sortOrder: number;

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap => {
      this.beerName = paramMap.get('beer');
      beerService.getBeer(this.beerName).subscribe(
        data => {
          this.beerDetails = data;
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert("Beer not found");
          }else{
            console.error(error.status + " - " + error.body);
            alert("An error occurred on the server, please check the console.");
          }
        }
      );
      beerService.getBarsSelling(this.beerName).subscribe(
        data => {
          this.beerLocations = data
        }
      );

      this.filterOptions =[
        {
          'label':'Low price first',
          'value':'Low price'
        },
        {
          'label':'High price first',
          'value':'High price'
        }
      ]

    }))
  }

  ngOnInit() {
  }

  sortBy(selectedOption: string){
    if(selectedOption === 'Low price'){
      this.beerLocations.sort((a,b)=>{return a.price - b.price;})
    }else if(selectedOption === 'High price'){
      this.beerLocations.sort((a,b)=>{return b.price - a.price;})
    }
  }

}