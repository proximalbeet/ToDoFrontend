// This service will:
//   - fetch tasks from your backend
// - mark tasks completed
// - delete completed tasks
// - add new tasks

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5151/ToDo';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(this.apiUrl);
  }

  addNewTask(task: any) {
    return this.http.post(this.apiUrl, task);
  }

  markCompleted(id: string) {
    return this.http.post(`${this.apiUrl}/ToDo/${id}/complete`, {});
  }

  deleteCompletedTasks() {
    return this.http.delete(`${this.apiUrl}/completed`);
  }
}
