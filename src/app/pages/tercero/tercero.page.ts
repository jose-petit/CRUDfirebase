import { Todo, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.page.html',
  styleUrls: ['./tercero.page.scss'],
})
export class TerceroPage implements OnInit {

  todos: Todo[];
  constructor(
    private todoService: TodoService,
    ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(todo) {
    this.todoService.removeTodo(todo.id);
  }
}
