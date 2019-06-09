import { Todo, TodoService } from './../../services/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy {

  todos: Todo[];
  grado: string;
  title$: BehaviorSubject<string> = new BehaviorSubject('Inicio');
  title: string;
  todoSubscription$: Subscription;
  totalTodos: number;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.grado = this.route.snapshot.params['grado'];
    this.todoSubscription$ = this.todoService.getTodos()
      .subscribe(res => {
        this.filterTodos(this.grado);
      });
    this.filterTodos(this.grado);
    this.title$.subscribe(title => {
      this.title = title;
    });
  }

  setTitle(grado) {
    this.totalTodos = this.todos.length;
    switch (grado) {
      case 'primero':
        this.title$.next(`Primer año "7mo" - [${this.totalTodos}]`);
        break;
      case 'segundo':
        this.title$.next(`Segundo año "8vo" - [${this.totalTodos}]`);
        break;
      case 'tercero':
        this.title$.next(`Tercer año "9no" - [${this.totalTodos}]`);
        break;
      case 'cuarto':
        this.title$.next(`Cuarto año "4to" - [${this.totalTodos}]`);
        break;
      case 'quinto-a':
        this.title$.next(`Quinto año A "5to-A" - [${this.totalTodos}]`);
        break;
      case 'quinto-b':
        this.title$.next(`Quinto año B "5to-B" - [${this.totalTodos}]`);
        break;

      default:
        this.title$.next(`Todos - [${this.totalTodos}]`);
        break;
    }
  }

  filterTodos(grado) {
    let filterValue = null;
    switch (grado) {
      case 'primero':
        filterValue = '07';
        break;
      case 'segundo':
        filterValue = '08';
        break;
      case 'tercero':
        filterValue = '09';
        break;
      case 'cuarto':
        filterValue = '10';
        break;
      case 'quinto-a':
        filterValue = '11';
        break;
      case 'quinto-b':
        filterValue = '12';
        break;
      default:
        break;
    }
    this.todos = this.todoService.filteredTodos(filterValue);
    this.setTitle(this.grado);
  }

  remove(todo) {
    this.todoService.removeTodo(todo.id);
  }

  ngOnDestroy() {
    this.todoSubscription$.unsubscribe();
  }
}
