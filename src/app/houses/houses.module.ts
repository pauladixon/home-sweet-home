import { HousesComponent } from './houses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesListComponent } from './houses-list/houses-list.component';

@NgModule({
  declarations: [ HousesComponent, HousesListComponent ],
  imports: [ CommonModule ],
  exports: [ HousesComponent ]
})
export class HousesModule { }
