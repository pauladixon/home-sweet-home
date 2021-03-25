import { IBuyer, IHouse } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})

export class HousesComponent implements OnInit {
  
  title: string = ''
  homes: IHouse[] = []

  constructor() { }

  ngOnInit() {

    this.title = 'houses'
    this.homes = [
      { nickname: 'mansion', address: '2039 termon ave', neighborhood: 'brighton heights', bedrooms: 6, bathrooms: 3, price: 350000, availableSince: new Date(2021, 3, 3)},
  ];
  }

}