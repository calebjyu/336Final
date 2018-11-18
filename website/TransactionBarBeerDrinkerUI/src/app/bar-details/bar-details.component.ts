import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BarsService, Bar, BarMenuItem} from '../bars.service';
import { HttpResponse } from '@angular/common/http';
declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  barName: string;
  day:string;
  barDetails: Bar;
  menu: BarMenuItem[];

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap => {
      this.barName = paramMap.get('bar');
      barService.getBar(this.barName).subscribe(
        data => {
          this.barDetails = data;
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert("Bar not found");
          }else{
            console.error(error.status + " - " + error.body);
            alert("An error occurred on the server, please check the console.");
          }
        }
      );
      /*barService.getMenu(this.barName).subscribe(
        data => {
          this.menu = data;
        }
      );*/
      barService.getLargestSpenders(this.barName).subscribe(
        data=>{
          const spent = [];
          const drinkers = [];
          data.forEach(spends=>{
            drinkers.push(spends.drinker);
            spent.push(spends.total_spent);
          });
          this.renderChart(drinkers, spent, 'Largest Spenders', 'Drinker', 'Amount', 'bargraph');
        }
      );
      if(this.day)
      {
        barService.getBeerRank(this.barName,this.day).subscribe(
          data=>{
            const brand = [];
            const sales = [];
            data.forEach(rank=>{
              brand.push(rank.attr);
              sales.push(rank.tot_beers);
            });
            this.renderChart(brand, sales, 'Most Popular Beer Brands per Bar', 'Brand', 'Number of Sales',
              'bargraph2');
          }
        );
      }
      
    }))
  }

  ngOnInit() {
  }
  setDay(day:string){
    this.day=day;
    if(this.day){
      this.barService.getBeerRank(this.barName,this.day).subscribe(
        data=>{
          const brand = [];
          const sales = [];
          data.forEach(rank=>{
            brand.push(rank.attr);
            sales.push(rank.tot_beers);
          });
          this.renderChart(brand, sales, 'Most Popular Beer Brands per Bar', 'Brand', 'Number of Sales','bargraph2');
        }
      );
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
