import { Component, OnInit } from '@angular/core';
import { BartendersService } from '../bartenders.service';
import { ActivatedRoute } from '@angular/router';

export interface Shift{

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
      //this.barName = ;
      bartenderService.get_shifts(this.bartenderName, this.barName).subscribe(
        data => {
          this.shifts = data;
        }
      );
    }))
   }

  ngOnInit() {
  }

}
