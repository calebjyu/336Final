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
    if(this.modifyService.exists(name, '/api/drinker/')){
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

  confirm_bar_delete (){
    let element: HTMLInputElement = document.getElementById("delete_bar_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_bar(){
    let name: string = (document.getElementById("bar_name") as HTMLInputElement).value;
    let license: string = (document.getElementById("bar_license") as HTMLInputElement).value;
    let state: string = (document.getElementById("bar_state") as HTMLInputElement).value;
    let city: string = (document.getElementById("bar_city") as HTMLInputElement).value;
    let phone: string = (document.getElementById("bar_phone") as HTMLInputElement).value;
    let address: string = (document.getElementById("bar_address") as HTMLInputElement).value;
    if(this.modifyService.exists(name, '/api/bar/')){
      this.modifyService.delete_bar(name).subscribe();
      this.modifyService.insert_bar(name,license,state,city,phone,address).subscribe();
    }else{
      this.modifyService.insert_bar(name,license,state,city,phone,address).subscribe()
    }
    window.location.reload();
  }
  delete_bar(){
    let element: HTMLInputElement = document.getElementById("delete_bar_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_bar") as HTMLInputElement).value;
    this.modifyService.delete_bar(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }

  confirm_item_delete (){
    let element: HTMLInputElement = document.getElementById("delete_item_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_item(){
    let name: string = (document.getElementById("item_name") as HTMLInputElement).value;
    let type: string = (document.getElementById("item_type") as HTMLInputElement).value;
    let attr: string = (document.getElementById("item_attr") as HTMLInputElement).value;
    if(this.modifyService.exists(name,'/api/items/')){
      this.modifyService.delete_item(name).subscribe();
      this.modifyService.insert_item(name,type,attr).subscribe();
    }else{
      this.modifyService.insert_item(name,type,attr).subscribe()
    }
    window.location.reload();
  }
  delete_item(){
    let element: HTMLInputElement = document.getElementById("delete_item_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_item") as HTMLInputElement).value;
    this.modifyService.delete_item(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }

  confirm_bartender_delete (){
    let element: HTMLInputElement = document.getElementById("delete_bartender_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_bartender(){
    let name: string = (document.getElementById("bartender_name") as HTMLInputElement).value;
    let license: string = (document.getElementById("bartender_license") as HTMLInputElement).value;
    if(this.modifyService.exists(name,'/api/bartender/')){
      this.modifyService.delete_bartender(name).subscribe();
      this.modifyService.insert_bartender(name,license).subscribe();
    }else{
      this.modifyService.insert_bartender(name,license).subscribe()
    }
    window.location.reload();
  }
  delete_bartender(){
    let element: HTMLInputElement = document.getElementById("delete_bartender_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_bartender") as HTMLInputElement).value;
    this.modifyService.delete_bartender(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }

  confirm_bill_delete (){
    let element: HTMLInputElement = document.getElementById("delete_bill_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_bill(){
    let name: string = (document.getElementById("bill_id") as HTMLInputElement).value;
    let time: string = (document.getElementById("bill_time") as HTMLInputElement).value;
    let date: string = (document.getElementById("bill_date") as HTMLInputElement).value;
    let subtotal: number = Number((document.getElementById("bill_subtotal") as HTMLInputElement).value);
    let tip: number = Number((document.getElementById("bill_tip") as HTMLInputElement).value);
    let total: number = Number((document.getElementById("bill_total") as HTMLInputElement).value);

    if(this.modifyService.exists(name,'/api/bills/')){
      this.modifyService.delete_bill(name).subscribe();
      this.modifyService.insert_bill(name,time,date,subtotal,tip,total).subscribe();
    }else{
      this.modifyService.insert_bill(name,time,date,subtotal,tip,total).subscribe()
    }
    window.location.reload();
  }
  delete_bill(){
    let element: HTMLInputElement = document.getElementById("delete_bill_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_bill") as HTMLInputElement).value;
    this.modifyService.delete_bill(name).subscribe();
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
