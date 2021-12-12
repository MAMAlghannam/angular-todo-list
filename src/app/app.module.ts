import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FirstButtonComponent } from './components/first-button/first-button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule // custom routing module
  ],
  declarations: [
    AppComponent,
    TasksComponent,
    // FirstButtonComponent,
    TaskItemComponent,
    AddTaskComponent,
    SchedulerComponent,
    ScheduleItemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
