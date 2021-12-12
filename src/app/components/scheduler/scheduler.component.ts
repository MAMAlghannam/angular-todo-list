import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  list: any = [];

  ngOnInit(): void {

  }

  dateChanged(e: any){
    this.list.push(e.target.value)
    console.log(e.target.value)
  }

}
