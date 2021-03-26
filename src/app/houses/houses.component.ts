
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
})

export class HousesComponent implements OnInit {
  
  title: string = ''
  houses: any[] = []

  constructor() { }

  ngOnInit() {

    this.title = 'houses'
    this.houses = [
      { nickname: 'mansion', address: '2039 termon ave', neighborhood: 'brighton heights', bedrooms: 6, bathrooms: 3, price: 350000, availableSince: new Date(2021, 2, 3)},
  ];
  }

}