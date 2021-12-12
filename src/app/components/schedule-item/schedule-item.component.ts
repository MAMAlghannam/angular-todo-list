import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {

  constructor() { }

  @Input() item: any;

  ngOnInit(): void {
  }

}
