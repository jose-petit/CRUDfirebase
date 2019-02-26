import { Todo, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.page.html',
  styleUrls: ['./cuarto.page.scss'],
})
export class CuartoPage implements OnInit {

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
