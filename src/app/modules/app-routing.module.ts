import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from '../components/tasks/tasks.component';
import { SchedulerComponent } from '../components/scheduler/scheduler.component';
import { YelpComponent } from '../components/yelp/yelp.component';
import { FormComponent } from '../components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VirtualScrollComponent } from '../components/virtual-scroll/virtual-scroll.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: "", redirectTo: "/tasks", pathMatch: "full" },
  { path: "tasks",  component: TasksComponent },
  { path: "scheduler",  component: SchedulerComponent },
  { path: "yelpapi",  component: YelpComponent },
  { path: "form",  component: FormComponent },
  { path: "virtual-scroll",  component: VirtualScrollComponent },
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
    ReactiveFormsModule,
    // NgbDropdownModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
