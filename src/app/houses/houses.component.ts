import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})

export class HousesComponent implements OnInit {
  
  title: string = ''
  homes: any[] = []

  constructor() { }

  ngOnInit() {

    this.title = 'houses'
    this.homes = [
      {placeholder: 'placeholder'}
    ]
  }

}