import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  tasks: any = [
    {
      id: 1,
      content: "task 1",
      isDone: false
    },
    {
      id: 2,
      content: "task 2",
      isDone: false
    },
    {
      id: 3,
      content: "task 3",
      isDone: false
    }
  ];

  ngOnInit(): void {
    console.log("tasks init")
  }

  addItem(){
    let itemId = this.tasks.length > 0 ? this.tasks[this.tasks.length-1].id + 1 : 1

    this.tasks.push({
      id: itemId,
      content: `task ${itemId}`,
      isDone: false
    })
  }

  handleDeleteTask(itemIndex: number) {
    this.tasks.splice(itemIndex, 1)
    console.log("Deleted !" + itemIndex)
  }

  handleToggleTask(itemIndex: any) {
    this.tasks[itemIndex].isDone = !this.tasks[itemIndex].isDone
  }
  
}
