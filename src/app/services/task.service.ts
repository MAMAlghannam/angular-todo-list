import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(`/api/tasks`)
  }

  addTask(task: any) {
    return this.http.put(`/api/tasks`, task)
  }

  deleteTask(taskIndex: number) {
    return this.http.delete(`/api/tasks?taskIndex=${taskIndex}`)
  }

  updateIsDone(taskIndex: number, isDone: boolean){
    return this.http.post(`/api/tasks?taskIndex=${taskIndex}&isDone=${isDone}`, null)
  }

}
