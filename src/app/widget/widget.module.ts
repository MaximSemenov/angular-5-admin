import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetComponent

  ],
  exports: [
    WidgetComponent
  ]
})

export class WidgetModule { }
