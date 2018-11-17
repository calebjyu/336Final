import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BeerService, Beer,Time, BeerLocation} from '../beer.service';
import { HttpResponse } from '@angular/common/http';
import {Drinker} from '../drinkers.service'

import {SelectItem} from 'primeng/components/common/selectitem';
declare const Highcharts: any;

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;
  beerLocations: BeerLocation[];
  soldMost: BeerLocation[];
  drinkers: Drinker[];
  times: Time[];
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
      beerService.where_beer_is_sold_most(this.beerName).subscribe(
        data => {
          this.soldMost = data
        }
      );
      beerService.who_drinks_beer_most(this.beerName).subscribe(
        data => {
          this.drinkers = data
        }
      );
      beerService.get_when_is_beer_consumed_most(this.beerName).subscribe(
        data=>{
          const times = [];
          const amounts = [];
          data.forEach(time=>{
            times.push(time.hour);
            amounts.push(time.amount);
          });
          this.renderChart(times, amounts, 'Time Distribution of Beer Sold', 'Hours', 'Number of Beers', 'bargraph');
        }
      )
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