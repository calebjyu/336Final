import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DrinkersService, Drinker, Transaction } from '../drinkers.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: Drinker;
  transaction: Transaction[];

  constructor(
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap => {
      this.drinkerName = paramMap.get('bar');
      drinkerService.getDrinker(this.drinkerName).subscribe(
        data => {
          this.drinkerDetails = data;
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert("Drinker not found");
          }else{
            console.error(error.status + " - " + error.body);
            alert("An error occurred on the server, please check the console.");
          }
        }
      );
      drinkerService.getTransactions(this.drinkerName).subscribe(
        data => {
          this.transaction = data;
        }
      )
    }))
  }

  ngOnInit() {
  }

}
