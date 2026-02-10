import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToDoList} from "./to-do-list/to-do-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoList],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';
}
