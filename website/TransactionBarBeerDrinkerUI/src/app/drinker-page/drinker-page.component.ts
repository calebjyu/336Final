import { Component, OnInit } from '@angular/core';
import { DrinkersService, Drinker } from '../drinkers.service';

@Component({
  selector: 'app-drinker-page',
  templateUrl: './drinker-page.component.html',
  styleUrls: ['./drinker-page.component.css']
})
export class DrinkerPageComponent implements OnInit {

  drinkers: Drinker[];

  constructor( public drinkersService: DrinkersService ) {
    this,this.getDrinkers();
   }

  ngOnInit() {
  }

  getDrinkers(){
    this.drinkersService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert("Could not retrieve a list of drinkers");
      }
    );
  }

}
