import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DrinkersService, Drinker, Transaction } from '../drinkers.service';
import { HttpResponse } from '@angular/common/http';
declare const Highcharts: any;

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
      this.drinkerName = paramMap.get('drinker');
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
      );
      drinkerService.getFavoriteBeers(this.drinkerName).subscribe(
        data=>{
          const beers = [];
          const amounts = [];
          data.forEach(favBeer=>{
            beers.push(favBeer.name);
            amounts.push(favBeer.count_of_beers);
          });
          this.renderChart(beers, amounts);
        }
      )
    }))
  }

  ngOnInit() {
  }

  renderChart(beers: string[] , amounts: number[]){
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Favorite beers'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Beer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of beers'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: amounts
      }]
    });
  }

}

