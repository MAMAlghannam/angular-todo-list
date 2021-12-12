import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: any = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true
    this.taskService
    .getTasks()
    .subscribe( // how to solve it ?
      (data) =>{ 
        this.tasks = data
        this.isLoading = false
      },
      (err) => alert(err)
    )
  }

  addItem(text: string){
    this.isLoading = true
    this.taskService
    .addTask({ content: text })
    .subscribe( // how to solve it ?
      (data) => {
        this.tasks.push(data)
        this.isLoading = false
      },
      (err) => alert(JSON.stringify(err))
    )
  }

  handleDeleteTask(itemIndex: number) {
    this.isLoading = true
    this.taskService
    .deleteTask(itemIndex)
    .subscribe( // how to solve it ?
      (data) => {
        this.tasks.splice(itemIndex, 1)
        this.isLoading = false
      },
      (err) => alert(JSON.stringify(err))
    )
  }

  handleToggleTask(itemIndex: any) {
    this.isLoading = true
    this.taskService
    .updateIsDone(itemIndex, !this.tasks[itemIndex].isDone)
    .subscribe( // how to solve it ?
      (data) => {
        this.tasks[itemIndex].isDone = !this.tasks[itemIndex].isDone
        this.isLoading = false
      },
      (err) => {
        alert(JSON.stringify(err))
      }
    )
  }
  
}
