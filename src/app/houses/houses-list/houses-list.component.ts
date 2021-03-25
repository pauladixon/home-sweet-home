import { IHouse } from './../../shared/interfaces';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
})

export class HousesListComponent implements OnInit {
  private _houses: IHouse[] = []
  @Input() get houses(): IHouse[] {
    return this._houses
  }

  set houses(value: IHouse[]){
    if(value){
      this.filteredHouses = this._houses = value
    }
  }


  filteredHouses: any[] = []
  currencyCode: string = 'USD'

  constructor() { }

  ngOnInit(){
  }

  sort(prop: string) {

  }
}
