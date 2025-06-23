import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-todo.component.html'
})
export class NewTodoComponent {
  title: string = '';
  desc: string = '';

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const newTodo: Todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.addTodo.emit(newTodo);

    // Clear form
    this.title = '';
    this.desc = '';
  }
}
