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
            beers.push(favBeer.item);
            amounts.push(favBeer.count);
          });
          this.renderChart(beers, amounts, 'Favorite Beers', 'Beers', 'Number of Beers', 'bargraph');
        }
      )
      drinkerService.getDrinkerSpend(this.drinkerName).subscribe(
        data=>{
          const spent = [];
          const bars = [];
          data.forEach(spends=>{
            spent.push(spends.total);
            bars.push(spends.bar);
          });
          this.renderChart(bars, spent, 'Amount spent at Bars', 'Bars', 'Amount', 'bargraph2');
        }
      )
    }))
  }

  ngOnInit() {
  }

  renderChart(xData: string[] , yData: number[], title:string, x:string, y:string ,id:string){
    Highcharts.chart(id, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: xData,
        title: {
          text: x
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: y
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
        data: yData
      }]
    });

  }

}

