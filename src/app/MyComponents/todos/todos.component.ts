import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent {
  todos: Todo[] = [
    {
      sno: 1,
      title: "string 1",
      desc: "Desc 1",
      active: true
    },
    {
      sno: 2,
      title: "string 2",
      desc: "Desc 2",
      active: false
    },
    {
      sno: 3,
      title: "string 3",
      desc: "Desc 3",
      active: false
    }
  ];


  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
