import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Todo {
  id: number,
  text: string,
  isCompleted: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceTodoService {

  initialTodos = [
    { id: 1, text: 'ToDo-1', isCompleted: true },
    { id: 2, text: 'ToDo-2', isCompleted: false }
  ]
  todoSubject = new BehaviorSubject<Todo[]>(this.initialTodos);
  todo$ = this.todoSubject.asObservable();

  deleteToDo(id: number) {
    this.initialTodos.forEach((todo, ind) => {
      if (todo.id === id) {
        this.initialTodos.splice(ind, 1);
      }
    })
    this.todoSubject.next(this.initialTodos);
  }

  addTodo(todo: Todo) {
    this.initialTodos.push(todo);
    this.todoSubject.next(this.initialTodos);
    console.log(this.todo$);

  }
}
