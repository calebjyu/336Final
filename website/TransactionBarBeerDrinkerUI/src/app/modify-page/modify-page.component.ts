import { Component, OnInit } from '@angular/core';
import { ModifyService, Bill } from '../modify.service';
import { DrinkersService, Drinker } from '../drinkers.service';
import { BarsService, Bar } from '../bars.service';
import { BartendersService, Bartender } from '../bartenders.service';
import { BeerService, Item } from '../beer.service';



@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.css']
})
export class ModifyPageComponent implements OnInit {

  constructor(public modifyService: ModifyService, 
    public drinkersService: DrinkersService, 
    public barService: BarsService,
    public beerService: BeerService,
    public bartenderService: BartendersService) { 
    this;
    this.getDrinkers();
    this.getItems();
    this.getBars();
    this.getBills();
    this.getBartenders();
  }

  drinkers: Drinker[];
  item: Item[];
  bartenders: Bartender[];
  bars: Bar[];
  bills: Bill[];

  ngOnInit() {
  }

  confirm_drinker_delete (){
    let element: HTMLInputElement = document.getElementById("delete_drinker_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_drinker(){
    let name: string = (document.getElementById("drinker_name") as HTMLInputElement).value;
    let state: string = (document.getElementById("drinker_state") as HTMLInputElement).value;
    let city: string = (document.getElementById("drinker_city") as HTMLInputElement).value;
    let phone: string = (document.getElementById("drinker_phone") as HTMLInputElement).value;
    let address: string = (document.getElementById("drinker_address") as HTMLInputElement).value;
    if(this.modifyService.drinker_exists(name)){
      this.modifyService.delete_drinker(name).subscribe();
      this.modifyService.insert_drinker(name,state,city,phone,address).subscribe();
    }else{
      this.modifyService.insert_drinker(name,state,city,phone,address).subscribe()
    }
    window.location.reload();
  }
  delete_drinker(){
    let element: HTMLInputElement = document.getElementById("delete_drinker_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_drinker") as HTMLInputElement).value;
    this.modifyService.delete_drinker(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }

  confirm__delete (){
    let element: HTMLInputElement = document.getElementById("delete__div") as HTMLInputElement;
    element.hidden = false;
  }
  update_(){
    let name: string = (document.getElementById("_name") as HTMLInputElement).value;
    let state: string = (document.getElementById("_state") as HTMLInputElement).value;
    let city: string = (document.getElementById("_city") as HTMLInputElement).value;
    let phone: string = (document.getElementById("_phone") as HTMLInputElement).value;
    let address: string = (document.getElementById("_address") as HTMLInputElement).value;
    if(this.modifyService._exists(name)){
      this.modifyService.delete_(name).subscribe();
      this.modifyService.insert_(name,state,city,phone,address).subscribe();
    }else{
      this.modifyService.insert_(name,state,city,phone,address).subscribe()
    }
    window.location.reload();
  }
  delete_(){
    let element: HTMLInputElement = document.getElementById("delete__div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_") as HTMLInputElement).value;
    this.modifyService.delete_(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }

  getDrinkers(){
    this.drinkersService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert("Could not retrieve a list of drinkers");
      }
    );
  }
  getBars(){
    this.barService.getBars().subscribe(
      data => {
        this.bars = data;
      },
      error => {
        alert("Could not retrieve a list of bars");
      }
    );
  }
  getBartenders(){
    this.bartenderService.getBartenders().subscribe(
      data => {
        this.bartenders = data;
      },
      error => {
        alert("Could not retrieve a list of bartenders");
      }
    );
  }
  getItems(){
    this.beerService.getItems().subscribe(
      data => {
        this.item = data;
      },
      error => {
        alert("Could not retrieve a list of beers");
      }
    );
  }
  getBills(){
    this.modifyService.getBills().subscribe(
      data => {
        this.bills = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }

  displayDrinkers(){
    this.hideAll();
    document.getElementById("drinkers").hidden = false;
  }
  displayBars(){
    this.hideAll();
    document.getElementById("bars").hidden = false;
  }
  displayItems(){
    this.hideAll();
    document.getElementById("items").hidden = false;
  }
  displayBartenders(){
    this.hideAll();
    document.getElementById("bartenders").hidden = false;
  }
  displayBills(){
    this.hideAll();
    document.getElementById("bills").hidden = false;
  }
  hideAll(){
    document.getElementById("drinkers").hidden = true;
    document.getElementById("bars").hidden = true;
    document.getElementById("items").hidden = true;
    document.getElementById("bartenders").hidden = true;
    document.getElementById("bills").hidden = true;
  }

}
