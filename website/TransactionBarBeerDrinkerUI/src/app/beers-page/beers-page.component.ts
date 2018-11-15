import { Component, OnInit } from '@angular/core';
import { BeerService, Beer } from '../beer.service';

@Component({
  selector: 'app-beers-page',
  templateUrl: './beers-page.component.html',
  styleUrls: ['./beers-page.component.css']
})
export class BeersPageComponent implements OnInit {

  beer: Beer[];

  constructor(public beerService: BeerService
    ) { 
      this.getBeers();
    }

  ngOnInit() {
  }

  getBeers(){
    this.beerService.getBeers().subscribe(
      data => {
        this.beer = data;
      },
      error => {
        alert("Could not retrieve a list of beers");
      }
    );
  }

}
