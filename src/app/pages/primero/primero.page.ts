
import { Todo, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.page.html',
  styleUrls: ['./primero.page.scss'],
})
export class PrimeroPage implements OnInit {

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
