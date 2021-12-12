import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() addTask: EventEmitter<any> = new EventEmitter();

  addTaskForm = this.formBuiler.group({
    taskName: ""
  })

  constructor(private formBuiler: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addItem();
  }

  addItem() {
    const { taskName } = this.addTaskForm.value
    
    if(!taskName || taskName?.length == 0)
      return;

    this.addTask.emit(taskName);
    this.addTaskForm.reset()

  }

}
