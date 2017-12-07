import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';

const routes: Routes = [

  { path: 'charts', component: ChartsComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ChartsComponent
  ],
  exports: [
    ChartsComponent
  ]

})
export class ChartsModule { }
