import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectServiceTodoService, Todo } from '../../services/subject-service-todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject-to-do-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './subject-to-do-list.component.html',
  styleUrl: './subject-to-do-list.component.css'
})
export class SubjectToDoListComponent {
  todos: Observable<Todo[]> | undefined;

  constructor(private todoService: SubjectServiceTodoService) {
   // console.log(addUtil(2, 3))
  }

  ngOnInit() {
    this.todos = this.todoService.todo$;
    console.log(this.todos);
  }

  deleteTodo(id: number) {
    this.todoService.deleteToDo(id);
  }

}
