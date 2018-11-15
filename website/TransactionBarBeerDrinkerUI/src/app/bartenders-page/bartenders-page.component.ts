import { Component, OnInit } from '@angular/core';
import { BartendersService, Bartender } from '../bartenders.service';

@Component({
  selector: 'app-bartenders-page',
  templateUrl: './bartenders-page.component.html',
  styleUrls: ['./bartenders-page.component.css']
})
export class BartendersPageComponent implements OnInit {

  bartenders: Bartender[];

  constructor(public barService: BartendersService
    ) { 
      this.getBartenders();
    }

  ngOnInit() {
  }

  getBartenders(){
    this.barService.getBartenders().subscribe(
      data => {
        this.bartenders = data;
      },
      error => {
        alert("Could not retrieve a list of bartenders");
      }
    );
  }

}