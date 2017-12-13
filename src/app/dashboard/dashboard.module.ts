import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LatestReportComponent } from './latest-report/latest-report.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { KnobComponent } from './knob/knob.component';
import { CurrentStatusComponent } from './current-status/current-status.component';
import { ProjectsComponent } from './projects/projects.component';
import { ChartsComponent } from './charts/charts.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    LatestReportComponent,
    LatestUpdatesComponent,
    KnobComponent,
    CurrentStatusComponent,
    ProjectsComponent,
    ChartsComponent,
    TasksComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
