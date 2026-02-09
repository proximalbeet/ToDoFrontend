import { Component } from '@angular/core';
import {TaskService} from "./task.service";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-to-do-list',
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  protected title = 'My Tasks';

  // Filters
  protected filterCategory: any;
  protected filterDue: any;
  protected filterStatus: any;

  protected tasks: Object = [];

  protected newTaskPriority: any;
  ngOnInit() {
    this.loadTasks();
  }

  constructor(private taskService: TaskService) {}

  // ⭐ NEW: call backend and fill tasks[]
  protected loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  protected applyFilters() {}

  protected clearFilters() {}

  protected markCompleted(task: any) {
    this.taskService.markCompleted(task.id).subscribe(() => {
      this.loadTasks();
    });
  }

  protected addNewTask() {
    const newTask = {
      description: '',   // you will fill this later
      category: '',
      dueDate: null,
      status: 'Open',
      priority: this.newTaskPriority
    };

    this.taskService.addNewTask(newTask).subscribe(() => {
      this.loadTasks();
    });
  }

  protected deleteCompletedTasks() {
    this.taskService.deleteCompletedTasks().subscribe(() => {
      this.loadTasks(); // refresh table
    });
  }

}
