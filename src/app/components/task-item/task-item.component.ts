import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() task: any;
  @Input() taskIndex: number = -1;
  @Output() deleteTask: EventEmitter<any> = new EventEmitter();
  @Output() toggleTask: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log("task-item ngOnInit")
  }

  onDelete() {
    this.deleteTask.emit();
  }

  onToggle(){
    this.toggleTask.emit();
  }

}
