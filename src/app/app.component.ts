import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  title:string = ''

  constructor(){

  }

  ngOnInit(){
    this.title = 'home sweet home'
  }


}
