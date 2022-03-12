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
import { YelpComponent } from './components/yelp/yelp.component';
import { FormComponent } from './components/form/form.component';
import { InputPlusComponent } from './components/input-plus/input-plus.component';
import { InputWrapperComponent } from './components/input-warpper/input-wrapper.component';
import { InputErrMsgComponent } from './components/input-err-msg/input-err-msg.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    VirtualScrollerModule,
    NgbDropdownModule,
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
    YelpComponent,
    FormComponent,
    InputPlusComponent,
    InputWrapperComponent,
    InputErrMsgComponent,
    VirtualScrollComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
