import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget.component';
import { Routes } from '@angular/router/src/config';


const routes: Routes = [

  { path: 'widget', component: WidgetComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    WidgetComponent

  ],
  exports: [
    WidgetComponent
  ]
})

export class WidgetModule { }
