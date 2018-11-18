import { Component, OnInit } from '@angular/core';
import { BartendersService } from '../bartenders.service';
import { ActivatedRoute } from '@angular/router';
declare const Highcharts: any;

export interface Shift{
  shift:string;
  amount_of_beers:number;
}

@Component({
  selector: 'app-bartender-details',
  templateUrl: './bartender-details.component.html',
  styleUrls: ['./bartender-details.component.css']
})
export class BartenderDetailsComponent implements OnInit {

  bartenderName: string;
  barName:string;
  shifts: Shift[];

  constructor(
    private bartenderService: BartendersService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap => {
      this.bartenderName = paramMap.get('bartender');
      //this.barName = (document.getElementById("bar_name") as HTMLInputElement).value;
      if(this.barName != ""){
        bartenderService.get_shifts(this.bartenderName, this.barName).subscribe(
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
    }));

   }

  ngOnInit() {
  }
  get_shifts(){
    this.barName = (document.getElementById("bar_name") as HTMLInputElement).value;
      if(this.barName != ""){
        this.bartenderService.get_shifts(this.bartenderName, this.barName).subscribe(
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
