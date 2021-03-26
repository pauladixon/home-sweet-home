import { SharedModule } from './../shared/shared.module';
import { HousesComponent } from './houses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesListComponent } from './houses-list/houses-list.component';
import { FilterComponent } from './houses-list/filter/filter.component';

@NgModule({
  declarations: [ HousesComponent, HousesListComponent, FilterComponent ],
  imports: [ CommonModule, SharedModule ],
  exports: [ HousesComponent ]
})
export class HousesModule { }
