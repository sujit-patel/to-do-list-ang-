import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NewTodoComponent } from '../new-todo/new-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, NewTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent {
localItem: string | null;
  todos: Todo[] = [];

  constructor() {
  if (typeof localStorage !== 'undefined') {
    this.localItem = localStorage.getItem("todos");
    this.todos = this.localItem ? JSON.parse(this.localItem) : [];
  } else {
    this.localItem = null;
    this.todos = [];
  }
}


  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  todoAdd(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
