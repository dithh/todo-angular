import { Component, OnInit, Input } from '@angular/core';
import {Todo} from "../todo.model"


@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css']
})
export class TodosEditComponent implements OnInit {
  @Input () todos: Todo[];
  todoDescription =" bagno"

  constructor() { }

  ngOnInit() {
  }

  onAddTodo(desc: string){
    if(desc.length > 0){
    this.todos.push(new Todo(desc, false));
    }
    else{
      alert("Enter a description of the task")
    }
  }

}
