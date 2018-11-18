import { Component, OnInit } from '@angular/core';
import { ModifyService, Bill } from '../modify.service';
import { DrinkersService, Drinker } from '../drinkers.service';
import { BarsService, Bar } from '../bars.service';
import { BartendersService, Bartender } from '../bartenders.service';
import { BeerService, Item } from '../beer.service';
import { HttpResponse } from '@angular/common/http';


export interface Base{
  attr1:string;
  attr2:string;
  attr3:string;
  attr4:string;
  attr5:string;
  num1:number;
  num2:number;
}

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
    this.getWorks();
    this.getFrequents();
    this.getHours();
    this.getInventory();
    this.getLikes();
    this.getOperates();
    this.getPrintedOn();
    this.getSells();
    this.getTransacts();
  }

  drinkers: Drinker[];
  item: Item[];
  bartenders: Bartender[];
  bars: Bar[];
  bills: Bill[];
  frequents: Base[];
  hours: Base[];
  inventory: Base[];
  likes: Base[];
  operates: Base[];
  printed_on: Base[];
  sells: Base[];
  transacts: Base[];
  works: Base[];

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

  confirm_frequents_delete (){
    let element: HTMLInputElement = document.getElementById("delete_frequents_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_frequents(){
    let attr1: string = (document.getElementById("frequents_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("frequents_attr2") as HTMLInputElement).value;

    if(this.modifyService.exists(name,'/api/frequents/')){
      this.modifyService.delete_frequents(name).subscribe();
      this.modifyService.insert_frequents(attr1,attr2).subscribe();
    }else{
      this.modifyService.insert_frequents(attr1,attr2).subscribe()
    }
    window.location.reload();
  }
  delete_frequents(){
    let element: HTMLInputElement = document.getElementById("delete_frequents_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_frequents") as HTMLInputElement).value;
    this.modifyService.delete_frequents(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }
  confirm_hours_delete (){
    let element: HTMLInputElement = document.getElementById("delete_hours_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_hours(){
    let attr1: string = (document.getElementById("hours_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("hours_attr2") as HTMLInputElement).value;
    let attr3: string = (document.getElementById("hours_attr3") as HTMLInputElement).value;
    let attr4: string = (document.getElementById("hours_attr4") as HTMLInputElement).value;

    if(this.modifyService.exists(name,'/api/hours/')){
      this.modifyService.delete_hours(name).subscribe();
      this.modifyService.insert_hours(attr1,attr2,attr3,attr4).subscribe();
    }else{
      this.modifyService.insert_hours(attr1,attr2,attr3,attr4).subscribe()
    }
    window.location.reload();
  }
  delete_hours(){
    let element: HTMLInputElement = document.getElementById("delete_hours_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_hours") as HTMLInputElement).value;
    this.modifyService.delete_hours(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }
  confirm_inventory_delete (){
    let element: HTMLInputElement = document.getElementById("delete_inventory_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_inventory(){
    let attr1: string = (document.getElementById("inventory_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("inventory_attr2") as HTMLInputElement).value;
    let num1: number = Number((document.getElementById("inventory_attr3") as HTMLInputElement).value);
    let attr4: string = (document.getElementById("inventory_attr4") as HTMLInputElement).value;
    alert("Violates foreign key constraints.");
    if(this.modifyService.exists(name,'/api/inventory/')){
      this.modifyService.delete_inventory(name).subscribe();
      this.modifyService.insert_inventory(attr1,attr2,num1,attr4).subscribe(error=>{alert("Violates foreign key constraints.");});
    }else{
      this.modifyService.insert_inventory(attr1,attr2,num1,attr4).subscribe(error=>{alert("Violates foreign key constraints.");})
    }
    //window.location.reload();
  }
  delete_inventory(){
    let element: HTMLInputElement = document.getElementById("delete_inventory_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_inventory") as HTMLInputElement).value;
    this.modifyService.delete_inventory(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }
  confirm_likes_delete (){
    let element: HTMLInputElement = document.getElementById("delete_likes_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_likes(){
    let attr1: string = (document.getElementById("likes_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("likes_attr2") as HTMLInputElement).value;

    if(this.modifyService.exists(name,'/api/likes/')){
      this.modifyService.delete_likes(name).subscribe();
      this.modifyService.insert_likes(attr1,attr2).subscribe();
    }else{
      this.modifyService.insert_likes(attr1,attr2).subscribe()
    }
    window.location.reload();
  }
  delete_likes(){
    let element: HTMLInputElement = document.getElementById("delete_likes_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_likes") as HTMLInputElement).value;
    this.modifyService.delete_likes(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }
  confirm_operates_delete (){
    let element: HTMLInputElement = document.getElementById("delete_operates_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_operates(){
    let attr1: string = (document.getElementById("operates_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("operates_attr2") as HTMLInputElement).value;

    if(this.modifyService.exists(name,'/api/operates/')){
      this.modifyService.delete_operates(name).subscribe();
      this.modifyService.insert_operates(attr1,attr2).subscribe();
    }else{
      this.modifyService.insert_operates(attr1,attr2).subscribe()
    }
    window.location.reload();
  }
  delete_operates(){
    let element: HTMLInputElement = document.getElementById("delete_operates_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_operates") as HTMLInputElement).value;
    this.modifyService.delete_operates(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }
  confirm_printed_on_delete (){
    let element: HTMLInputElement = document.getElementById("delete_printed_onv_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_printed_on(){
    let attr1: string = (document.getElementById("printed_on_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("printed_on_attr2") as HTMLInputElement).value;
    alert("Violates foreign key constraints.");
    if(this.modifyService.exists(name,'/api/printed_on/')){
      this.modifyService.delete_printed_on(name).subscribe();
      this.modifyService.insert_printed_on(attr1,attr2).subscribe(error=>{alert("Violates foreign key constraints.");});
    }else{
      this.modifyService.insert_printed_on(attr1,attr2).subscribe(error=>{alert("Violates foreign key constraints.");})
    }
    //window.location.reload();
  }
  delete_printed_on(){
    let element: HTMLInputElement = document.getElementById("delete_printed_on_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_printed_on") as HTMLInputElement).value;
    this.modifyService.delete_printed_on(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }
  confirm_sells_delete (){
    let element: HTMLInputElement = document.getElementById("delete_sells_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_sells(){
    let attr1: string = (document.getElementById("sells_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("sells_attr2") as HTMLInputElement).value;
    let num1: number = Number((document.getElementById("sells_attr3") as HTMLInputElement).value);
    alert("Violates foreign key constraints.");
    if(this.modifyService.exists(name,'/api/sells/')){
      this.modifyService.delete_sells(name).subscribe();
      this.modifyService.insert_sells(attr1,attr2,num1).subscribe(error=>{alert("Violates foreign key constraints.");});
    }else{
      this.modifyService.insert_sells(attr1,attr2,num1).subscribe(error=>{alert("Violates foreign key constraints.");})
    }
    //window.location.reload();
  }
  delete_sells(){
    let element: HTMLInputElement = document.getElementById("delete_sells_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_sells") as HTMLInputElement).value;
    this.modifyService.delete_sells(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }
  confirm_transacts_delete (){
    let element: HTMLInputElement = document.getElementById("delete_transacts_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_transacts(){
    let attr1: string = (document.getElementById("transacts_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("transacts_attr2") as HTMLInputElement).value;
    let attr3: string = (document.getElementById("transacts_attr3") as HTMLInputElement).value;

    if(this.modifyService.exists(name,'/api/transacts/')){
      this.modifyService.delete_transacts(name).subscribe();
      this.modifyService.insert_transacts(attr1,attr2,attr3).subscribe();
    }else{
      this.modifyService.insert_transacts(attr1,attr2,attr3).subscribe()
    }
    window.location.reload();
  }
  delete_transacts(){
    let element: HTMLInputElement = document.getElementById("delete_transacts_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_transacts") as HTMLInputElement).value;
    this.modifyService.delete_transacts(name).subscribe();
    element.hidden = true;
    window.location.reload();
  }
  confirm_works_delete (){
    let element: HTMLInputElement = document.getElementById("delete_works_div") as HTMLInputElement;
    element.hidden = false;
  }
  update_works(){
    let attr1: string = (document.getElementById("works_attr1") as HTMLInputElement).value;
    let attr2: string = (document.getElementById("works_attr2") as HTMLInputElement).value;
    let attr3: string = (document.getElementById("works_attr3") as HTMLInputElement).value;
    let num1: number = Number((document.getElementById("works_attr3") as HTMLInputElement).value);
    let num2: number = Number((document.getElementById("works_attr3") as HTMLInputElement).value);

    if(this.modifyService.exists(name,'/api/works/')){
      this.modifyService.delete_works(name).subscribe();
      this.modifyService.insert_works(attr1,attr2,attr3,num1,num2).subscribe();
    }else{
      this.modifyService.insert_works(attr1,attr2,attr3,num1,num2).subscribe()
    }
    window.location.reload();
  }
  delete_works(){
    let element: HTMLInputElement = document.getElementById("delete_works_div") as HTMLInputElement;
    let name: string = (document.getElementById("delete_works") as HTMLInputElement).value;
    this.modifyService.delete_works(name).subscribe();
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
  getFrequents(){
    this.modifyService.getFrequents().subscribe(
      data => {
        this.frequents = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }
  getHours(){
    this.modifyService.getHours().subscribe(
      data => {
        this.hours = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }
  getInventory(){
    this.modifyService.getInventory().subscribe(
      data => {
        this.inventory = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }
  getLikes(){
    this.modifyService.getLikes().subscribe(
      data => {
        this.likes = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }
  getOperates(){
    this.modifyService.getOperates().subscribe(
      data => {
        this.operates = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }
  getPrintedOn(){
    this.modifyService.getPrintedOn().subscribe(
      data => {
        this.printed_on = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }
  getSells(){
    this.modifyService.getSells().subscribe(
      data => {
        this.sells = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }
  getTransacts(){
    this.modifyService.getTransacts().subscribe(
      data => {
        this.transacts = data;
      },
      error => {
        alert("Could not retrieve a list of manufacturers");
      }
    );
  }
  getWorks(){
    this.modifyService.getWorks().subscribe(
      data => {
        this.works = data;
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
  displayFrequents(){
    this.hideAll();
    document.getElementById("frequents").hidden = false;
  }
  displayHours(){
    this.hideAll();
    document.getElementById("hours").hidden = false;
  }
  displayInventory(){
    this.hideAll();
    document.getElementById("inventory").hidden = false;
  }
  displayLikes(){
    this.hideAll();
    document.getElementById("likes").hidden = false;
  }
  displayOperates(){
    this.hideAll();
    document.getElementById("operates").hidden = false;
  }
  displayPrintedOn(){
    this.hideAll();
    document.getElementById("printed_on").hidden = false;
  }
  displaySells(){
    this.hideAll();
    document.getElementById("sells").hidden = false;
  }
  displayTransacts(){
    this.hideAll();
    document.getElementById("transacts").hidden = false;
  }
  displayWorks(){
    this.hideAll();
    document.getElementById("works").hidden = false;
  }
  hideAll(){
    document.getElementById("drinkers").hidden = true;
    document.getElementById("bars").hidden = true;
    document.getElementById("items").hidden = true;
    document.getElementById("bartenders").hidden = true;
    document.getElementById("bills").hidden = true;
    document.getElementById("frequents").hidden = true;
    document.getElementById("hours").hidden = true;
    document.getElementById("inventory").hidden = true;
    document.getElementById("likes").hidden = true;
    document.getElementById("operates").hidden = true;
    document.getElementById("printed_on").hidden = true;
    document.getElementById("sells").hidden = true;
    document.getElementById("transacts").hidden = true;
    document.getElementById("works").hidden = true;

  }

}
