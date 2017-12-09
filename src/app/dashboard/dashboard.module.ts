import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { LatestReportComponent } from './latest-report/latest-report.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { KnobComponent } from './knob/knob.component';
import { CurrentStatusComponent } from './current-status/current-status.component';
import { ProjectsComponent } from './projects/projects.component';
import { ChatsComponent } from './chats/chats.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [

  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardComponent,
    LatestReportComponent,
    LatestUpdatesComponent,
    KnobComponent,
    CurrentStatusComponent,
    ProjectsComponent,
    ChatsComponent,
    TasksComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
