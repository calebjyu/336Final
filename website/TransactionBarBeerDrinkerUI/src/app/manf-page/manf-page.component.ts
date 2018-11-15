import { Component, OnInit } from '@angular/core';
import { ManfService, Manf } from '../manf.service';

@Component({
  selector: 'app-manf-page',
  templateUrl: './manf-page.component.html',
  styleUrls: ['./manf-page.component.css']
})
export class ManfPageComponent implements OnInit {

  manf: Manf[];

  constructor(public beerService: ManfService
    ) { 
      this.getManfs();
    }

  ngOnInit() {
  }

  getManfs(){
    this.beerService.getManfs().subscribe(
      data => {
        this.manf = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }

}
