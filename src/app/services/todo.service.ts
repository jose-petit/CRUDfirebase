import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Todo {
  id?: string;
  titulo: string;
  descripcion: string;
  fecha: number;
  gradoId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoCollection: AngularFirestoreCollection<Todo>;

  private todosSubject$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  private todos$: Observable<Todo[]>;

  constructor(db: AngularFirestore) {
    this.todoCollection = db.collection<Todo>('todos');
    this.todos$ = this.todoCollection
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    this.todos$.subscribe(
      (x) => {
        this.todosSubject$.next(x);
      },
      (err: any) => {
        this.todosSubject$.error(err);
      },
      () => {
        this.todosSubject$.complete();
      },
    );
  }

  getTodos() {
    return this.todos$;
  }

  getTodo(id) {
    return this.todoCollection.doc<Todo>(id).valueChanges();
  }

  updateTodo(todo: Todo, id: string) {
    return this.todoCollection.doc(id).update(todo);
  }

  addTodo(todo: Todo) {
    return this.todoCollection.add(todo);
  }

  removeTodo(id: string) {
    return this.todoCollection.doc(id).delete();
  }

  /* Todo's filtrados */
  filteredTodos(filterValue: string): Todo[] {
    let _filteredTodos = [];
    this.todosSubject$
      .subscribe(res => {
        _filteredTodos = filterValue ? res.filter(todo => todo.gradoId === filterValue) : res;
      });
    return _filteredTodos;
  }
}
