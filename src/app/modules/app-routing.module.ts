import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from '../components/tasks/tasks.component';
import { SchedulerComponent } from '../components/scheduler/scheduler.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/tasks", pathMatch: "full" },
  { path: "tasks",  component: TasksComponent },
  { path: "scheduler",  component: SchedulerComponent },
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot( // routing
      appRoutes, 
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
