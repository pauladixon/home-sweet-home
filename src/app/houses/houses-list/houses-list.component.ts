import { IHouse } from './../../shared/interfaces';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.sass']
})
export class HousesListComponent implements OnInit {

  filteredHouses: IHouse[] = []
  currencyCode: string = 'USD'

  constructor() { }

  ngOnInit(){
  }

}
