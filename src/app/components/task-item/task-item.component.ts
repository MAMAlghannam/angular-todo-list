import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() task: any;
  @Output() deleteTask: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  onDelete() {
    this.deleteTask.emit();
    console.log("going to delete " + JSON.stringify(this.task))
  }

}
