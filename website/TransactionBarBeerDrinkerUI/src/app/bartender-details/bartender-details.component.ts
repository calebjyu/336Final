import { Component, OnInit } from '@angular/core';
import { BartendersService } from '../bartenders.service';
import { BarsService, Bar } from '../bars.service';

import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { BarDetailsComponent } from '../bar-details/bar-details.component';
declare const Highcharts: any;

export interface Shift{
  start:number;
  end:number;
  shift:string;
  attr:string;
  amount_of_beers:number;
}

@Component({
  selector: 'app-bartender-details',
  templateUrl: './bartender-details.component.html',
  styleUrls: ['./bartender-details.component.css']
})
export class BartenderDetailsComponent implements OnInit {

  bartenderName: string;
  bars: Bar[];
  bar:string;
  shifts: Shift[];

  setBar(bar:string){
    this.bar = bar;
    this.bartenderService.get_shifts(this.bartenderName, this.bar).subscribe(
      data=>{
        const shiftss = [];
        const amounts = [];
        data.forEach(shift=>{
          shift.shift = shift.start + '-' + shift.end;
          shiftss.push(shift.shift);
          amounts.push(shift.amount_of_beers);
        });
        this.shifts = data;
        this.renderChart(shiftss, amounts, 'Beers Sold Per Shift', 'Shift', 'Amount of Beer',
          'bargraph');
      }
    );
  }

  constructor(
    private bartenderService: BartendersService,
    private barsService: BarsService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap => {
      this.bartenderName = paramMap.get('bartender');
        
        barsService.getBars().subscribe(
          data=>{
            this.bars=data;
            this.bars.forEach(bar=>{
              var element = document.createElement('a');
              element.className = "dropdown-item";
              element.innerHTML = bar.name;
              element.addEventListener("click", (e:Event) => this.setBar(bar.name));
              document.getElementById("bar-dropdown").append(element);
            })
          }
        )
    }));
    
   }

  ngOnInit() {
  }

  get_shifts(){
    this.bar = (document.getElementById("bar_name") as HTMLInputElement).value;
      if(this.bar != ""){
        this.bartenderService.get_shifts(this.bartenderName, this.bar).subscribe(
          data=>{
            const shiftss = [];
            const amounts = [];
            data.forEach(shift=>{
              shiftss.push(shift.shift);
              amounts.push(shift.amount_of_beers);
            });
            this.renderChart(shiftss, amounts, 'Beers Sold Per Shift', 'Shift', 'Amount of Beer',
              'bargraph');
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

