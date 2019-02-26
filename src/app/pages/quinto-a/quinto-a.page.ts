import { Todo, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quinto-a',
  templateUrl: './quinto-a.page.html',
  styleUrls: ['./quinto-a.page.scss'],
})
export class QuintoAPage implements OnInit {

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
