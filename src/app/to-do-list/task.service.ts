// This service will:
//   - fetch tasks from your backend
// - mark tasks completed
// - delete completed tasks
// - add new tasks

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5151/ToDo';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<any>(this.apiUrl).pipe(
      map((items: any[]) =>
        items.map(item => ({
          id: item.id,
          description: item.description,
          category: item.category,
          priority: item.priority,
          dueDate: item.dueDate ? new Date(item.dueDate) : null,
          status: item.status,
          overDue: item.overDue
        }))
      )
    );
  }

  addNewTask(task: any) {
    return this.http.post<any>(this.apiUrl, task);
  }

  markCompleted(id: string) {
    return this.http.put(`${this.apiUrl}/${id}/complete`, {});
  }

  deleteCompletedTasks() {
    return this.http.delete(`${this.apiUrl}/completed`);
  }
}
