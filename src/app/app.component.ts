import { Component } from '@angular/core';
import {Todo} from "./todos/todo.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo[] = [
    new Todo("Get a dev job", true),
    new Todo("Get a dev job", false),
    new Todo("Get a dev job", false),

  ]
}
