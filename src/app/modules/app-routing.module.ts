import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from '../components/tasks/tasks.component';
import { SchedulerComponent } from '../components/scheduler/scheduler.component';
import { YelpComponent } from '../components/yelp/yelp.component';
import { FormComponent } from '../components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: "", redirectTo: "/tasks", pathMatch: "full" },
  { path: "tasks",  component: TasksComponent },
  { path: "scheduler",  component: SchedulerComponent },
  { path: "yelpapi",  component: YelpComponent },
  { path: "form",  component: FormComponent }
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot( // routing
      appRoutes, 
      // { enableTracing: true }
    ),
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
